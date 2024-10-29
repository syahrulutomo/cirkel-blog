export type Article = {
  id: string;
  thumbnail: string;
  label: string;
  title: string;
  short_description: string;
  created_at: string;
  updated_at: string;
  author: string;
  content: string;
}

export type DynamicType = {
  title: string;
  description: string;
  data: Article[]
}

export interface HomeDataType {
  highlight: Article
  dynamic: DynamicType[]
}