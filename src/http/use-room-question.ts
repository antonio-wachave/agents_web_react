import { useQuery } from '@tanstack/react-query';
import type { GetRoomsAPIQuestionsResponse } from './types/get-room-question-response';

export function useRoomQuestion(roomId: string) {
  return useQuery({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      );
      const result: GetRoomsAPIQuestionsResponse = await response.json();

      return result;
    },
  });
}
