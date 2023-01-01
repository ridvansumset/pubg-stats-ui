import http from '../../http';
import { MatchParams } from '../../models';

export default {
  getPlayerByName(name: string) {
    return http.get(`/pubg/user/byname/${name}`);
  },
  getMatchById(params: MatchParams) {
    return http.get(`/pubg/match/byid/${params.id}`, { params });
  },
}
