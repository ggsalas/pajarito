import {UseCase} from '../../common/UseCase'

export class ListTrinoUseCase extends UseCase {
  somethingWrongTrinoErrorFactory
  repository

  constructor({repository, somethingWrongTrinoErrorFactory}) {
    super()
    this.repository = repository
    this.somethingWrongTrinoErrorFactory = somethingWrongTrinoErrorFactory
  }

  async execute() {
    const TrinosList = await this.repository.all()

    return TrinosList.toJSON()
  }
}
