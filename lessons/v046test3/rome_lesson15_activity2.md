### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# 搭建引水道！

## 步驟 1
來搭建引水道吧！先建立 ``||variable:length||``（長度）和 ``||variable:segments||``（段數）變數。接著在 ``||loops:當啟動時||`` 將 ``||variable:length 設為||`` **5**，並將 ``||variable:segments 設為||`` **6**。

## 步驟 2
在 ``||player:當輸入聊天指令時||``，加入 Agent 搭建 **1 段**引水道所需的動作：``||agent:將物品設為石英柱||``，數量設成 **64**，接著 ``||agent:放置方塊||``，再 ``||agent:向前移動||``。Minecraft 裡的水遇到斜坡就會流動，因此 Agent 必須在**左方、右方和下方放置方塊**。把這些動作放進 ``||loops:重複||`` 迴圈，重複 ``||variable:length||`` 次。

## 步驟 3
接著把第一個 ``||loops:重複||`` 迴圈放進另一個 ``||loops:重複||`` 迴圈，讓外層迴圈重複 ``||variables:segments||`` 次。到 Minecraft 裡試試看！

### ~ tutorialHint
在內層迴圈前加入 ``||agent:Agent 向下移動||`` 積木，讓程式順利執行！

```ghost
player.onChat("build", function () {
    agent.move(DOWN, 1)
    for (let index = 0; index < Segments; index++) {
        for (let index = 0; index < length; index++) {
            agent.setItem(WHITE_CONCRETE, 64, 1)
            agent.place(LEFT)
            agent.place(RIGHT)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(DOWN, 1)
    }
})
let Segments = 0
let length = 0
length = 5
Segments = 6
```

```package
core=*
builder=*
EducationContent=github:brian505046104/minecraft-education-zh-tw-test/extensions/educationcontent-1621203a0ab3#v0.46-test3
```
