



### @flyoutOnly 1



# 地毯建造工具



```template

player.onItemInteracted(BLAZE_ROD, function () {

})



```



# 8. 鋪設地毯



## 活動介紹 @unplugged



# 鋪設地毯



![Agent 示範](https://github.com/gbaman/minecraft-ee-seymour-island/raw/master/media/carpet.gif)



## 步驟2



這個任務要請 Agent 鋪設地毯，重現指定圖案。

請完成提供的 4 個區域。

我們會用清單／陣列，儲存原有地毯的圖案。

接著逐列讀出資料，鋪出指定設計。

按「下一步」開始吧！



## 步驟3

先建立一份空清單／陣列，使用 ``||Arrays:將清單設為||`` 積木。

再按減號，移除預設項目 1 和 2。

這時也可以把清單名稱 `list` 改成其他名稱。

例如，可以使用 `floor`。

需要重新開始時，隨時可以按牆上的「**重設 Agent 與任務**」。



```blocks

player.onItemInteracted(BLAZE_ROD, function () {

    floor = [];

})

```



## 步驟4

現在有地方儲存方塊 ID 了，接著把資料填進清單／陣列。

使用 ``||Agent:Agent 檢查下方方塊||``，讀取 Agent 正下方的方塊 ID。

接著準備用 ``||Arrays:將值加到尾端||`` 儲存資料。

把剛取得的方塊 ID 加到清單尾端。



```blocks

let floor: number[] = []

player.onItemInteracted(BLAZE_ROD, function () {

    floor = []

    floor.push(agent.inspect(AgentInspection.Block, DOWN))

})



```



## 步驟5

使用 ``||Agent:Agent 向左移動1格||``，移到下一個方塊。



```blocks

let floor: number[] = []

player.onItemInteracted(BLAZE_ROD, function () {

    floor = []

    floor.push(agent.inspect(AgentInspection.Block, DOWN))

    agent.move(LEFT, 1)

})



```



## 步驟6

現在加入 ``||Loops:重複指定次數||`` 迴圈，掃描全部 5 個方塊。

這樣就不必複製貼上整段程式。

記得只在最初建立一次空陣列，不要每次重複時都清空它。

全部掃描完後，請讓 Agent 回到起點。





```blocks

let floor: number[] = []

player.onItemInteracted(BLAZE_ROD, function () {

    floor = []

    for (let index = 0; index < 4; index++) {

        floor.push(agent.inspect(AgentInspection.Block, DOWN))

        agent.move(LEFT, 1)

    }

    agent.move(RIGHT, 4)

})

```



## 步驟7

接著要開始鋪設地板了。

``||Agent:使用指定方塊鋪設地板||`` 可以放下方塊，但要先取得方塊 ID。

為了依序讀取 ID，請接上 ``||Loops:逐一讀取清單中的項目||``。

再將 ``value`` 放進 ``||Agent:使用指定方塊鋪設地板||``。

   

在迴圈裡加入 ``||Agent:Agent 向左移動1格||``，讓它前進到下一個空位。





```blocks

let floor: number[] = []

player.onItemInteracted(BLAZE_ROD, function () {

    floor = []

    for (let index = 0; index < 4; index++) {

        floor.push(agent.inspect(AgentInspection.Block, DOWN))

        agent.move(LEFT, 1)

    }



    //hello world



    agent.move(RIGHT, 4)

    agent.move(FORWARD, 1)

    for (let value of floor) {

    	seymour.placeFloor(value)

    }

})

```



## 步驟8

現在已有鋪設一列地板的程式，請再套一個迴圈。

使用 ``||Loops:重複指定次數||``，完成這個四分之一區域。

接著用 ``||Agent:Agent 移動||`` 與 ``||Agent:Agent 轉向||`` 調整位置。

把 Agent 移到下一個區域的起點，再執行一次程式。



```blocks

let floor: number[] = []

player.onItemInteracted(BLAZE_ROD, function () {

    floor = []

    for (let index = 0; index < 4; index++) {

        floor.push(agent.inspect(AgentInspection.Block, DOWN))

        agent.move(LEFT, 1)

    }

    agent.move(RIGHT, 4)

    agent.move(FORWARD, 1)

    for (let index = 0; index < 4; index++) {

        for (let value of floor) {

        	seymour.placeFloor(value)

        }

        agent.move(RIGHT, 4)

        agent.move(FORWARD, 1)

    }

    agent.turn(LEFT_TURN)

    agent.move(FORWARD, 6)

})



```

```package
core=*
builder=*
seymour=github:brian505046104/minecraft-education-zh-tw-test/extensions/seymour-1650f49ea004#v0.46-test2
```
