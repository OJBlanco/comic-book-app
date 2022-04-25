/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */

interface Comic {
  aliases?: null
  api_detail_url: string
  cover_date: string
  date_added: string
  date_last_updated: string
  deck?: null
  description: string
  has_staff_review: boolean
  id: number
  image: Image
  issue_number: string
  name: string
  site_detail_url: string
  store_date?: null
  volume: Volume
}

interface Image {
  icon_url: string
  medium_url: string
  screen_url: string
  screen_large_url: string
  small_url: string
  super_url: string
  thumb_url: string
  tiny_url: string
  original_url: string
  image_tags: string
}

interface Volume {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}

interface CardData {
  title: string
  date: string
  image: string
  onClick: () => void
}

interface DetailComic {
  aliases?: null
  api_detail_url: string
  character_credits?: Generic[] | null
  character_died_in?: null[] | null
  concept_credits?: Generic[] | null
  cover_date: string
  date_added: string
  date_last_updated: string
  deck?: null
  description: string
  first_appearance_characters?: null
  first_appearance_concepts?: null
  first_appearance_locations?: null
  first_appearance_objects?: null
  first_appearance_storyarcs?: null
  first_appearance_teams?: null
  has_staff_review: boolean
  id: number
  image: Image
  issue_number: string
  location_credits?: Generic[] | null
  name: string
  object_credits?: null[] | null
  person_credits?: PersonCreditsEntity[] | null
  site_detail_url: string
  store_date?: null
  story_arc_credits?: null[] | null
  team_credits?: Generic[] | null
  team_disbanded_in?: null[] | null
  volume: Generic
}
interface Generic {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
}
interface PersonCreditsEntity {
  api_detail_url: string
  id: number
  name: string
  site_detail_url: string
  role: string
}
