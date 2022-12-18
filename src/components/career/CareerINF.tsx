export interface CareerINF {
    start_date: String,
    end_date: String,
    title: String,
    langs: number[],
    langs_str: String[],
    contents: String[],
    github_link: any,
    site_link: any,
}

export interface CareerListINF {
    getData: CareerINF[]
}