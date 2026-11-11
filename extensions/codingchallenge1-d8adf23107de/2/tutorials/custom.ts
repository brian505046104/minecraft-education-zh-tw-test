enum Choice {
    //% block="耳機"
    Headphones,
    //% block="球衣"
    Jersey,
    //% block="褲子"
    Pants,
    //% block="鞋子"
    Shoes,
    //% block="控制器"
    Controller
}

//% block="瞄準訓練" weight=100 color=#AA278D icon=""
namespace prizes {
    
export let newPrize = Choice.Headphones
    //% block="設定獎品 %choice"
    export function setPrize(choice: Choice) {
        newPrize = choice
    }


    //% block="發放獎品"
    export function givePrize() {
        if (newPrize == Choice.Headphones) {
            player.execute(
                "give @s cleverlike:headset"
            )
        } else if (newPrize == Choice.Jersey) {
            player.execute(
                "give @s cleverlike:jersey"
            )
        } else if (newPrize == Choice.Pants) {
            player.execute(
                "give @s cleverlike:pants"
            )
        } else if (newPrize == Choice.Shoes) {
            player.execute(
                "give @s cleverlike:boots"
            )
        } else if (newPrize == Choice.Controller) {
            player.execute(
                "give @s cleverlike:controlleritem"
            )
        }
    }



    //% block="開始瞄準訓練"
    export function playAimTrainer() {
        let timeRemaining = 0
        let worldLocations: Position[] = []
        let score = 0
        blocks.place(LAPIS_LAZULI_BLOCK, world(160, 28, 149))
        playGame()
        function playGame() {
            gameplay.setGameMode(
                SURVIVAL,
                mobs.target(NEAREST_PLAYER)
            )
            timeRemaining = 600
            worldLocations = [
                world(167, 40, 151),
                world(167, 47, 151),
                world(159, 43, 151),
                world(151, 40, 151),
                world(151, 47, 151)
            ]
            player.say("你有 30 秒，試著命中盡可能多的目標")
            loops.pause(3000)
            player.say("3...")
            player.execute(
                "playsound random.orb @a"
            )
            loops.pause(500)
            player.say("2...")
            player.execute(
                "playsound random.orb @a"
            )
            loops.pause(500)
            player.say("1...")
            player.execute(
                "playsound random.orb @a"
            )
            loops.pause(500)
            player.say("開始！！！")
            player.execute(
                "playsound random.orb @a"
            )
            agent.teleport(worldLocations._pickRandom(), NORTH)
            agent.setItem(TARGET, 1, 1)
            agent.setSlot(1)
            agent.place(DOWN)
            mobs.give(
                mobs.target(NEAREST_PLAYER),
                BOW,
                1
            )
            mobs.give(
                mobs.target(NEAREST_PLAYER),
                ARROW,
                128
            )
            while (timeRemaining > 0) {
                timeRemaining += -1
                if (agent.detect(AgentDetection.Redstone, DOWN)) {
                    player.execute(
                        "remove @e[type=arrow]"
                    )
                    agent.destroy(DOWN)
                    player.execute(
                        "playsound random.orb @a"
                    )
                    // This adds 1 to the score every time a Target is Hit
                    score += 1
                    if (timeRemaining > 0) {
                        agent.teleport(worldLocations._pickRandom(), NORTH)
                        agent.setItem(TARGET, 1, 1)
                        agent.setSlot(1)
                        agent.place(DOWN)
                    }
                }
            }
            if (timeRemaining == 0) {
                agent.destroy(DOWN)
                gameplay.title(mobs.target(NEAREST_PLAYER), "遊戲結束", "命中目標數： " + score)
                loops.pause(3000)
                for (let index = 0; index < score; index++) {
                    mobs.give(
                        mobs.target(NEAREST_PLAYER),
                        EMERALD,
                        1
                    )
                    player.execute(
                        "playsound random.orb @a"
                    )
                }
                blocks.place(DIAMOND_BLOCK, world(160, 28, 149))
            }
            player.execute(
                "clear @p bow"
            )
            player.execute(
                "clear @p arrow"
            )
            player.execute(
                "remove @e[type=arrow]"
            )
        }

    }


}
