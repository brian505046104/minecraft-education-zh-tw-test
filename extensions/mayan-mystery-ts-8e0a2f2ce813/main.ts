//ENUMS

enum Three_Axis {
    //% block="前方"
    Forward,
    //% block="左方"
    Left,
    //% block="右方"
    Right
}

//GLOBAL VARIABLES
const communicationsTimeout = 75;

//%  block="馬雅之謎" weight=200 color=#0B3D91 icon="\uf186"
namespace mayanMystery {

/**
 * 此函式控制 Agent 移動
 * 可朝三個方向移動
 */
//% block = "Agent 向 %d 移動 %n"
    export function agent_move(d: Three_Axis, n: number): void {
        for (let i =0; i < n; i++){
            switch (d) {
                case Three_Axis.Forward:
                    player.execute("scoreboard players set .output global 1")
                    break;
                case Three_Axis.Left:
                    player.execute("scoreboard players set .output global 2")
                    break;
                case Three_Axis.Right:
                    player.execute("scoreboard players set .output global 3")
            }
            loops.pause(communicationsTimeout)
        }
    }

}