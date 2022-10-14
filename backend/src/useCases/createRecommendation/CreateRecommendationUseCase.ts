import { Recommendation } from "../../entities/Recommendation";
import { IRecommendationRepository } from "../../repositories/IRecommendationsRepository";
import { ICreateRecommendationRequestDTO } from "./CreateRecommendationDTO";

export class CreateRecommendationUseCase {
    constructor(
        private recommendationRepository: IRecommendationRepository
    ) { }

    async execute(data: ICreateRecommendationRequestDTO) {
        const recommendation = new Recommendation(data)
        await this.recommendationRepository.save(recommendation)
    }
}