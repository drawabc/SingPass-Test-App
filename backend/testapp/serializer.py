def serialize(user_info):
    regadd = user_info.get("regadd", {})
    result = {
        "personal":{
            "nric": get_dct(user_info, "uinfin", "value"),
            "name": get_dct(user_info, "name", "value"),
            "sex": get_dct(user_info, "sex", "desc"),
            "dob": get_dct(user_info, "dob", "value"),
            "country": get_dct(user_info, "birthcountry", "desc"),
            "residentialStatus": get_dct(user_info, "residentialstatus", "desc"),
            "nationality": get_dct(user_info, "nationality", "desc"),
            "race": get_dct(user_info, "race", "desc"),
        },
        "contact":{
            "mobileno": get_dct(user_info, "mobileno", "nbr"),
            "email": get_dct(user_info, "email", "value"),
            "block": get_dct(regadd, "block", "value"),
            "street": get_dct(regadd, "street", "value"),
            "building": get_dct(regadd, "building", "value"),
            "unitNo" : get_dct(regadd, "floor", "value") + "-" + get_dct(regadd, "unit", "value"),
            "postal": get_dct(regadd, "postal", "value"),
            "housingType": get_dct(regadd, "hdbtype", "desc"),
        },
        "income":{
            "cpfbalance": user_info.get("cpfbalances", {}),
            "ownerprivate": user_info.get("ownerprivate", {}),
            "cpfhistory": user_info.get("cpfcontributions", {}).get("history", [])[-3:],
            "noa": user_info.get("noahistory", {}).get("noas", [])
        }
        
    }
    return result

def get_dct(dct, s1, s2):
    return dct.get(s1, {}).get(s2)