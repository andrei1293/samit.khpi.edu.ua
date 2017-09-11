import pandas as pd
from matplotlib import pyplot as plt

data_path = 'API_NY.GDP.MKTP.CD_DS2_en_csv_v2.csv'

gdp_data = pd.read_csv(data_path, 
                       skiprows = 4, 
                       index_col = 'Country Code', 
                       encoding = 'utf-8-sig')
gdp_data.head()

country_code = 'USA'
country_data = gdp_data.loc[country_code]

start_year = 2000
current_year = 2017

years = [str(year) for year in range(start_year, current_year)]
data = country_data[years].interpolate().dropna()

plt.plot(data,  marker = '*', label = 'USA GDP')
