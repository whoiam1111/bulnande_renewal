// 프로젝트 id로 불러오기
export async function getOneWork(id: string) {
  return await fetch(
    `https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events/${id}`
  );
}

// 전체 프로젝트 불러오기
export async function getWorks() {
  return await fetch(
    "https://iphzyiiv62.execute-api.ap-northeast-2.amazonaws.com/prod/api/v1/events?homepage=불난데부채질&limit=100"
  );
}
