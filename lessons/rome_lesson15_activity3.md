### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# 鋪出美麗花紋！

## 步驟 1
你的任務是沿著浴池地板的邊緣，用**石英柱**和**青金石**方塊交替排出花紋。先建立 ``||variable:blockA||`` 和 ``||variable:blockB||`` 變數。將 ``||variable:blockA 變數||`` 設為**石英方塊**，將 ``||variable:blockB 變數||`` 設為**青金石方塊**。把這些指令加進 ``||loops:當啟動時||`` 積木。

## 步驟 2
``||logic:如果||`` ``||count||`` = **0**，就讓 Agent 將物品設為 ``||variable:blockA||``，``||agent:破壞下方方塊||``、``||agent:在下方放置方塊||``，並讓 ``||variable:count 增加 1||``。``||logic:否則||``，就讓 Agent 將物品設為 ``||blockB||``，放置方塊，並讓 ``||count 增加 -1||``。

## 步驟 3
``||loops:當||`` Agent ``||logic:沒有||`` ``||偵測到||`` **前方**有方塊時，就讓它沿著同一排持續放置方塊。

## 步驟 4
Agent 必須完成蓄水池的 **4** 邊，因此要加入 ``||loops:重複||`` 積木。在派 Agent 開始放置方塊之前，先把 ``||count||`` 設為 **0**。

```template
let count = 0
player.onChat("floor", function () {
    count = 0
})
```


```ghost
player.onChat("floor", function () {
    count = 0
    for (let index = 0; index < 4; index++) {
        while (!(agent.detect(AgentDetection.Block, FORWARD))) {
            if (count == 0) {
                agent.setItem(blockA, 1, 1)
                agent.destroy(DOWN)
                agent.place(DOWN)
                count += 1
            } else {
                agent.setItem(blockB, 1, 1)
                agent.destroy(DOWN)
                agent.place(DOWN)
                count += -1
            }
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
    }
})
let count = 0
let blockB = 0
let blockA = 0
blockA = BLOCK_OF_QUARTZ
blockB = LAPIS_LAZULI_BLOCK
```

```package
core=*
builder=*
EducationContent=github:brian505046104/minecraft-education-zh-tw-test/extensions/educationcontent-1621203a0ab3#v0.46-test1
```
