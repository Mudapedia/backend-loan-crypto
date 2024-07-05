class ResponseError extends Error {
  private status: number;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }

  get getStatus() {
    return this.status;
  }
}

export default ResponseError;
