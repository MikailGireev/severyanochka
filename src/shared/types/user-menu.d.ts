interface Menu {
  label?: string;
  link?: string;
  action?: string;
}

interface Data {
  avatar: string;
  name?: string;
  menu?: Menu[];
}

export interface Props {
  data: Data;
}
