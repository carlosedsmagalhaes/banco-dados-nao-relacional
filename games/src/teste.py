from wtss import WTSS
import requests
import urllib3

# 🔇 Desabilita aviso de SSL (somente se necessário)
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# 🔍 Teste rápido da conexão
response = requests.get("https://brazildatacube.dpi.inpe.br/wtss/v4/", verify=False)
print("Status do endpoint WTSS:", response.status_code)

# ⚙️ Inicializa o serviço WTSS no endpoint correto (não use www.brazildatacube.org)
service = WTSS("https://brazildatacube.dpi.inpe.br/wtss/v4/")

# 🔎 Verifica quais coberturas estão disponíveis
print("Coberturas disponíveis:", service.coverages)

# 🛰️ Seleciona a cobertura MOD13Q1-6
coverage = service["MOD13Q1-6"]

# 📈 Obtém a série temporal
ts = coverage.ts(
    attributes=("NDVI", "EVI"),  # A cobertura MOD13Q1-6 usa NDVI e EVI
    latitude=-12.0,
    longitude=-54.0,
    start_date="2001-01-01",
    end_date="2001-12-31"
)

# 🧾 Exibe os valores
print("NDVI:", ts.NDVI)
print("EVI:", ts.EVI)
print("Timeline:", ts.timeline)

# 📊 Plota os dados (exibe gráfico)
ts.plot(attributes=["NDVI", "EVI"])
