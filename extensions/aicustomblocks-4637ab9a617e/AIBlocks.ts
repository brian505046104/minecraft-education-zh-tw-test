enum datasetType {
    //% block="歷史"
    historical = 0,
    //% block="目前"
    current = 1,
    //% block="即時"
    live = 2
}

enum ML {
    //% block="監督式"
    supervised,
    //% block="非監督式"
    unsupervised,
    //% block="半監督式"
    semiSupervised,
    //% block="強化式"
    reinforcment
}

//% color="#8c800b"
//% block="輸入"
namespace Input{

    //% block="位置 1 的影像資料"
    export function location1PictureData_MT() {
        blocks.place(STONE, world(96, 61, -397));
    }

    //% block="位置 1 的影像資料"
    export function location1PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="位置 2 的影像資料"
    export function location2PictureData_MT() {
        blocks.place(STONE, world(96, 61, -396));
    }

    //% block="位置 2 的影像資料"
    export function location2PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="位置 3 的影像資料"
    export function location3PictureData_MT() {
        blocks.place(STONE, world(96, 61, -395));
    }

    //% block="位置 3 的影像資料"
    export function location3PictureData_MTB() {
        agent.move(FORWARD, 2)
    }

    //% block="感測器 1 的即時資料"
    export function sensor1_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="感測器 2 的即時資料"
    export function sensor2_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="感測器 3 的即時資料"
    export function sensor3_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="感測器 4 的即時資料"
    export function sensor4_OO() {
        agent.move(FORWARD, 2)
    }

    //% block="自動相機 1 的資料"
    export function trap1_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="自動相機 2 的資料"
    export function trap2_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="自動相機 3 的資料"
    export function trap3_PR() {
        agent.move(FORWARD, 2)
    }

    //% block="取得位置 1 的衛星資料"
    export function beacon1_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="取得位置 2 的衛星資料"
    export function beacon2_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="取得位置 3 的衛星資料"
    export function beacon3_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="取得位置 4 的衛星資料"
    export function beacon4_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="取得位置 5 的衛星資料"
    export function beacon5_SF() {
        agent.move(FORWARD, 1)
    }

    //% block="控制衛星"
    //% handlerStatement=1
    export function runSatelite_SF(handler: () => void) {
            let i = 0
            for(i = 0; i<3; i++){
            handler();
        }
    }

    //% block="位置 1 的水質資料"
    export function waterData1_WQ() {
        agent.move(FORWARD, 2)
    }

    //% block="位置 2 的水質資料"
    export function waterData2_WQ() {
        agent.move(FORWARD, 2)
    }

    //% block="位置 3 的水質資料"
    export function waterData3_WQ() {
        agent.move(FORWARD, 2)
    }
}

//% color="#4C97FF"
//% block="資料集"
namespace Datasets{

    //% block="建立資料集"
    //% handlerStatement=1
    export function setOfData_MT(handler: () => void) {
        blocks.place(STONE, world(96, 61, -398));
        handler();
    }

    //% block="建立資料集"
    //% handlerStatement=1
    export function setOfData_MTB(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="建立 %type| 資料集"
    //% handlerStatement=1
    export function setOfData_OO(type: datasetType, handler: () => void) {
        if(type == 2){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="建立 %type| 資料集"
    //% handlerStatement=1
    export function setOfData_SF(type: datasetType, handler: () => void){
        if(type == 1){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="傳輸資料"
    export function transferData(){
        agent.move(UP, 6)
    }

    //% block="建立 %type| 資料集"
    //% handlerStatement=1
    export function setOfData_PR(type: datasetType, handler: () => void) {
        if(type == 0){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="建立 %type| 資料集"
    //% handlerStatement=1
    export function setOfData_WQ(type: datasetType, handler: () => void) {
        if(type == 1){
            let i = 0
            for(i = 0; i<2; i++){
            handler();
            }
        }
    }

    //% block="擷取模式"
    export function extractPatterns_PR() {
        agent.move(LEFT, 4)
    }

    //%block="目前資料集"
    export function currentData():number{
        return 0
    }

    //%block="歷史資料集"
    export function historicalData():number{
        return 0
    }

    //%block="即時資料集"
    export function liveData():number{
        let i = 2
        return i
    }

    //% block="輸入資料集"
    export function input_MT() {
    blocks.place(STONE, world(110, 61, -397));
    }

    //% block="輸入資料集"
    export function input_MTB() {
    agent.move(FORWARD, 2)
    }

    //% block="輸入多個資料集"
    export function input_PR() {
    agent.move(RIGHT, 2)
    }

    //% block="輸入多個資料集"
    export function input_SF() {
    agent.move(RIGHT, 2)
    }

    //% block="輸入 %type| 資料集"
    export function input_OO(type: datasetType){
        if(type == 2){
           agent.move(FORWARD, 3)
        }
    }

    //% block="比較 %type0| 資料集與 %type1|"
    //% handlerStatement=1
    export function compare_PR(type0: datasetType, type1: datasetType) {
        if(type0==1 && type1==0){
            agent.move(FORWARD, 2)
        }
    }

    //% block="比較 %type0| 資料集與 %type1|"
    //% handlerStatement=1
    export function compare_SF(type0: datasetType, type1: datasetType) {
        if(type0==1 && type1==0){
            agent.move(FORWARD, 2)
        }
    }

    //% block="輸入 %type| 資料集"
    export function input_WQ(type: datasetType){
        if(type == 1){
           agent.move(FORWARD, 3)
        }
    }

}

//% color="#8332A8"
//% block="人工智慧"
namespace AI {

    //% block="非監督式機器學習"
    //% handlerStatement=1
    export function ml_MT(handler: () => void) {
        blocks.place(STONE, world(110, 61, -398));
        handler();
    }

    //% block="非監督式機器學習"
    //% handlerStatement=1
    export function ml_MTB(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="半監督式機器學習"
    //% handlerStatement=1
    export function ml_SF(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="半監督式機器學習"
    //% handlerStatement=1
    export function ml_PR(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="監督式機器學習"
    //% handlerStatement=1
    export function ml_WQ(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="分析水質資料"
    export function analyze_WQ(){
        agent.move(RIGHT, 2)
    }
    
    //% block="分析資料"
    export function analyze_MT(){
        blocks.place(STONE, world(110, 61, -396));
    }

    //% block="分析資料"
    export function analyze_MTB(){
        agent.move(RIGHT, 3)
    }

    //% block="機器學習"
    //% handlerStatement=1
    export function ml_OO(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
            handler();
        }
    }

    //% block="自主導航演算法"
    //% handlerStatement=1
    export function ml_OO2(handler: () => void) {
        agent.move(DOWN, 5)
        handler();
    }

    //% block="分析地形資料"
    export function analyze_OO(){
        agent.move(LEFT, 1)
    }

    //% block="產生路線"
    export function genRoutes_OO(){
        agent.move(RIGHT, 2)
    }

    //% block="分析模式資料"
    export function analyze_PR(){
        agent.move(LEFT, 3)
    }

    //% block="執行預測分析"
    export function analyze_SF(){
        agent.move(LEFT, 3)
    }

}

//% color="#2d854e"
//% block="輸出"
namespace Output {

    //% block="Agent 抵達感測器 1"
    export function reach1_OO() {
        agent.move(DOWN, 5)
    }

    //% block="Agent 抵達感測器 2"
    export function reach2_OO() {
        agent.move(FORWARD, 24)
        agent.move(RIGHT, 7)
        agent.move(DOWN, 12)

        agent.teleport(world(679, 61, 96), 180)
    }

    //% block="Agent 抵達感測器 3"
    export function reach3_OO() {
        agent.move(DOWN, 5)
    }

    //% block="Agent 抵達感測器 4"
    export function reach4_OO() {
        agent.move(RIGHT, 32)
        agent.move(DOWN, 12)
        agent.move(FORWARD, 4)

        agent.teleport(world(679, 61, 96), 180)
    }

    //% block="顯示位置"
    export function showLocations_MT(){
        blocks.place(STONE, world(110, 61, -395));
    }

    //% block="顯示位置"
    export function showLocations_MTB(){
        agent.move(BACK, 1)
    }

    //% block="尋找山貓"
    export function locateOcelots_PR(){
        agent.move(RIGHT, 4)
    }

    //% block="尋找最佳耕種位置"
    export function locateFarm_SF(){
        agent.move(RIGHT, 4)
    }

    //% block="找出污染來源"
    export function locatePollution_WQ(){
        agent.move(LEFT, 3)
    }
}

//% color="#ED82B6"
//% block="測試"
namespace Test{

    //% block="測試迴圈"
    //% handlerStatement=1
    export function testLoop(handler: () => void) {
        let i = 0
        for(i = 0; i<2; i++){
        handler();
        }
    }

    //%block="測試移動"
    export function testMoves(){
        agent.move(FORWARD, 2)
        agent.turn(TurnDirection.Left)
        agent.move(FORWARD, 2)
    }
}


