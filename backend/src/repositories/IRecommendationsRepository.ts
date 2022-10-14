import { Recommendation } from "../entities/Recommendation";

export interface IRecommendationRepository {
    save(recommendation: Recommendation): Promise<void>
}