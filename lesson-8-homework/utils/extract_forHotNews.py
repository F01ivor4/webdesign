import re
from requests import get
from os.path import join

patterns = [
    re.compile(
        ".*href=\"(?P<href>https://www.baidu.com/s\?[^\"]+)\".*"
    ),
    re.compile(
        ".*class=\"title-content-title\">(?P<title>[^<]*)</span>.*"
    ),
    re.compile(
        ".*title=\"搜索指数(?P<exponent>[^\"]*)\">.*"
    ),
]



with open("utils/tmp.html") as f:
    t=f.read().split('\n')

items=[]
size = 0
agg = 3
item={}
for line in t:
    # print(line)
    tmpitem = {}
    for pattern in patterns:
        match = pattern.match(line)
        if match!=None:
            tmpitem.update(match.groupdict())
    if tmpitem != {}:
        size += 1
        item.update(tmpitem)
        if size % agg == 0:
            items.append(item)
            item = {}
    

with open('utils/dict.txt', 'w') as f:
    f.write(str(items))

print(items)

print(size)  