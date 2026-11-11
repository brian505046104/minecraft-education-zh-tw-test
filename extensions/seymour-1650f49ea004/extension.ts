/**
 * 用於建置 Agent 世界的實驗性擴充
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
//% block="西摩島"
namespace seymour {
   /**
     * 修復下方的方塊
     */
    //% block="Agent 修復下方方塊"
    //% weight=90
    export function repairBelow() {
        if (agent.inspect(AgentInspection.Block, DOWN) == AIR) {
            agent.place(DOWN)
        } else if (agent.inspect(AgentInspection.Block, DOWN) == MOSS_STONE) {
            agent.destroy(DOWN)
            agent.place(DOWN)
        }
    }

      /**
     * 在下方放置紅石
     */
    //% block="Agent 在下方放置紅石"
    //% weight=90
    export function placeRedstoneBelow() {
        agent.place(DOWN)
    }

   /**
     * 在下方放置可用的地板方塊
     * @param blockid 要放置在下方的方塊 ID
     */
    //% block="Agent 在下方放置地板 $blockid"
    //% weight=90
   export function placeFloor (blockid: number) {
      // 0 - 41 - Gold
      // 1 - 133 - Emerald
      // 2 - 57 - Gold
      // 3 - 22 - Lapis
      // 4 - 152 - Redstone
    if (blockid == 41) {
        agent.setSlot(0)
    } else if (blockid == 133) {
        agent.setSlot(1)
    } else if (blockid == 57) {
        agent.setSlot(2)
    } else if (blockid == 22) {
        agent.setSlot(3)
    } else if (blockid == 152) {
        agent.setSlot(4)
    } else {
        agent.setSlot(26)
    }
    agent.place(DOWN)
}

}
