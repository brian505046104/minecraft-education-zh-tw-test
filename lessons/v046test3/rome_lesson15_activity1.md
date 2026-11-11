### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# 開採石英！

## 步驟 1
編寫程式，**算出**蓋完剩下的柱子需要多少**方塊**。已知共有 **6 根柱子**，每根柱子**高 6 格**。先在 ``||loops:當啟動時||`` 建立 ``||variable:height||``（高度）和 ``||variable:quantity||``（數量）變數，並設定正確數值，再建立 ``||variable:total blocks||``（方塊總數）變數。

## 步驟 2
設定判斷條件：``||logic:如果||`` ``||variable:total blocks||`` = ``||variable:height||`` × ``||variable:quantity||``，就讓玩家 ``||player:說出||``「已收集足夠的方塊！」。

## 步驟 3
接著加入讓 ``||variable:total blocks 增加||`` 1 的指令，並讓玩家 ``||player:說出||`` ``||variable:total blocks||``，這樣就知道已經收集多少方塊。記得使用 ``||blocks:當石英柱方塊被破壞時||``，才能在挖方塊時看到累計數量。收集完成後，你會看到「已收集足夠的方塊！」的訊息。

```ghost
blocks.onBlockBroken(PILLAR_QUARTZ_BLOCK, function () {
    total_blocks += 1
    if (total_blocks == height * quantity) {
        player.say("已收集足夠的方塊！")
    }
})
let total_blocks = 0
let quantity = 0
let height = 0
height = 6
quantity = 6
```

```package
core=*
builder=*
EducationContent=github:brian505046104/minecraft-education-zh-tw-test/extensions/educationcontent-1621203a0ab3#v0.46-test3
```
