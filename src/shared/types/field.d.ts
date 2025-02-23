export interface Props {
  onChange: (value: string) => string | void;
  onSubmit: (event: Event) => void;
  disabled?: boolean;
  size?: 'l' | 'm';
  placeholder?: string;
}
