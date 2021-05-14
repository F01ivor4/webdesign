import re
from requests import get
from os.path import join

patterns = [
    re.compile(
        ".*href=\"(?P<href>https://mbd\.baidu\.com/newspage/data/landingsuper\?[^\"]+)\".*"
        "data-click=\"LOG_LINK\">(?P<title>[^<]*)</a>.*"
        "href=\"(?P<author_href>https://author.baidu.com/home?[^\"]*)\".*"
        "<span class=\"src\-net c\-color\-gray\">(?P<site>[^<]*)</span>.*"
        "<span class=\"src-time c-color-gray2 c-gap-right\">(?P<time>[^<]*)</span>"
    ),
    re.compile(
        ".*<img class=\"s-news-img\" src=\"(?P<img_url>https://pics[0-9]\.baidu\.com/feed/[^\"]*)\">.*"
    )
]

# <span class="src-net c-color-gray">北晚新视觉网</span>
# data-click="LOG_LINK">[^<]*</a>
# href="https://author.baidu.com/home?app_id=1562668965781895&amp;from=homepage_nickname"
# <span class="src-time c-color-gray2 c-gap-right">04-29 11:04</span>

# <img class="s-news-img" src="https://pics1.baidu.com/feed/c2cec3fdfc039245fe235a4e2b51cfca7c1e252e.jpeg?token=da9edfcbd90fac2f9a164535d36afe3a">

def extNamefromURL(url):
    print(url)
    pattern = re.compile("https://pics[0-9].baidu.com/feed/(?P<name>[^\?]*)\?token=.*")
    name = pattern.match(url)
    return name.groupdict()['name']

with open("tmp.html") as f:
    t=f.read().split('<div class="s-news-special')

imgDirname = 'recomend'

items=[]
size = 0
for line in t:
    # print(line)
    item={}
    for pattern in patterns:
        match = pattern.match(line)
        if match!=None:
        size += 1
        # item.update(match.groupdict())
        item.update(match.groupdict())
    if item != {}:
        # print(item, ",")
        if 'img_url' in item.keys():
        img = get(item['img_url'])
        img_name = extNamefromURL(item['img_url'])
        with open(join('public', imgDirname, img_name), "bw") as f:
            f.write(img.content)
        item['img']= join( imgDirname, img_name )
        item.pop('img_url')
        items.append(item)
    

with open('dict.txt', 'w') as f:
    f.write(str(items))

print(items)

print(size)  