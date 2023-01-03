import http from '../../http';
import { MatchData, MatchParams, PlayerData } from '../../models'

export default {
  async getPlayerByName(name: string) {
    const res = await http.get(`/pubg/user/byname/${name}`);
    const data: PlayerData = JSON.parse(res.data);

    if (data.player.matchIds === null) {
      data.player.matchIds = [];
    }

    return data;
  },
  async getMatchById(params: MatchParams) {
    const res = await http.get(`/pubg/match/byid/${params.id}`, { params });
    const data: MatchData = JSON.parse(res.data);

    return data;
  },
}
