async function main() {
  const url = new URL("https://data.inpe.br/bdc/wtss/v4/time_series");
  url.searchParams.set("coverage", "S2-16D-2");
  url.searchParams.set("attributes", "NDVI");
  url.searchParams.set("start_date", "2017-09-01");
  url.searchParams.set("end_date", "2018-08-31");
  url.searchParams.set("latitude", "-15.5898283072306");
  url.searchParams.set("longitude", "-47.5288794633165");

  const response = await fetch(url.toString());
  if (!response.ok) {
    console.error("Erro HTTP:", response.status, await response.text());
    return;
  }

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

main();
