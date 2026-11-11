/**
 * 自訂積木
 */
namespace agent {
    /**
     * 讓 Agent 朝指定方向依序丟出所有物品
     * @param direction 丟出物品的方向
     */
    //% block="Agent 朝 $direction 逐一丟出所有物品" blockId=agentdropallitemsindividually
    export function dropAllItemsIndividually(direction: SixDirection) {
        for (let slot = 1; slot <= 27 ; slot++) {
            let count = agent.getItemCount(slot);
            for(let i = 0; i < count; i++) {
                agent.drop(direction, slot, 1);
                loops.pause(100);
            }
        }
    }
}
