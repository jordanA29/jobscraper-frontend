export class Offer {
  public title: string;
  public summary: string;
  public postDate: string;
  public location: string;
  public salary?: string;
  constructor(
    title: string,
    summary: string,
    postDate: string,
    location: string,
    salary: string
  ) {
    this.title = title;
    this.summary = summary;
    this.postDate = postDate;
    this.location = location;
    this.salary = salary;
  }
}
