export interface NavigateStep {
  selector: string;
  action: 'click' | 'input' | 'extract';
  value?: string;
}

export class Navigator {
  async execute(step: NavigateStep): Promise<string | undefined> {
    const element = document.querySelector(step.selector) as HTMLElement | null;
    if (!element) {
      throw new Error(`Selector not found: ${step.selector}`);
    }
    switch (step.action) {
      case 'click':
        (element as HTMLElement).click();
        break;
      case 'input':
        (element as HTMLInputElement).value = step.value ?? '';
        break;
      case 'extract':
        return (element.textContent ?? '').trim();
      default:
        throw new Error(`Unknown action: ${step.action}`);
    }
    return undefined;
  }
}
