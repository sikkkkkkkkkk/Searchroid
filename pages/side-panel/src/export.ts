import config from '../../config.json' assert { type: 'json' };

export type ExportFormat = 'text' | 'json' | 'markdown';
export type ExportPlatform = 'sheets' | 'notion' | 'slack';

function resolveConfig(key: string): string | undefined {
  const envKey = `VITE_${key.toUpperCase()}`;
  return (import.meta.env[envKey as keyof ImportMetaEnv] as string | undefined) ||
    (config as Record<string, string>)[key];
}

export async function exportToGoogleSheets(data: string, format: ExportFormat) {
  const apiKey = resolveConfig('googleSheetsApiKey');
  const spreadsheetId = resolveConfig('googleSheetsSpreadsheetId');
  if (!apiKey || !spreadsheetId) throw new Error('Google Sheets configuration missing');

  const body = {
    values: [[data]],
  };

  const range = 'Sheet1!A1';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=RAW&key=${apiKey}`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

export async function exportToNotion(data: string, format: ExportFormat) {
  const apiKey = resolveConfig('notionApiKey');
  const databaseId = resolveConfig('notionDatabaseId');
  if (!apiKey || !databaseId) throw new Error('Notion configuration missing');

  const body = {
    parent: { database_id: databaseId },
    properties: {
      title: {
        title: [{ type: 'text', text: { content: new Date().toISOString() } }],
      },
    },
    children: [
      {
        object: 'block',
        type: 'paragraph',
        paragraph: { text: [{ type: 'text', text: { content: data } }] },
      },
    ],
  };

  await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify(body),
  });
}

export async function exportToSlack(data: string, _format: ExportFormat) {
  const webhookUrl = resolveConfig('slackWebhookUrl');
  if (!webhookUrl) throw new Error('Slack configuration missing');

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: data }),
  });
}

export async function exportResult(platform: ExportPlatform, format: ExportFormat, content: string) {
  switch (platform) {
    case 'sheets':
      return exportToGoogleSheets(content, format);
    case 'notion':
      return exportToNotion(content, format);
    case 'slack':
      return exportToSlack(content, format);
    default:
      throw new Error('Unsupported platform');
  }
}
