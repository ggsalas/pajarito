import { UseCase } from "../../common/UseCase";

export class CreateTrinoUseCase extends UseCase {
  repository;
  bodyValueObjectFactory;
  currentUserService;

  constructor({ repository, currentUserService, bodyValueObjectFactory }) {
    super();

    this.repository = repository;
    this.bodyValueObjectFactory = bodyValueObjectFactory;
    this.currentUserService = currentUserService;
  }

  async execute({ body: string }) {
    const body = this.bodyValueObjectFactory({ body: string });
    const currentUser = await this.currentUserService.execute();

    const trino = this.repository.create({
      body,
      user: currentUser,
    });

    return trino.toJSON();
  }
}
