{
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 450,
    "projection": {"type": "equalEarth"},
    "data": {
        "url": "map.json",
        "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
    },
    "transform":[{
        "lookup": "properties.NAME_EN",
        "from":{"data":  {
            "url":"data.csv"},
            "key": "Country"
            
        }
        

        
    },
    {"calculate": "datum.Country", "as":"sum_countries" }],

    "mark": {"type": "geoshape"},
    "encoding": {
        "color":{
            "field": "sum_countries", 
            "type": "quantitative",
            "scale": {"type": "log"}
        }
    }



}       