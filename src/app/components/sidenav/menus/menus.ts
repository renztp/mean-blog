export interface Menus {
  items: MenuLink[];
}

interface MenuLink {
  label: string;
  url: string;
  slug: string;
}
