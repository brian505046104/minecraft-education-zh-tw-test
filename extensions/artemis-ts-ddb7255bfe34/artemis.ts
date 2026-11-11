//enums

enum FourDirectionArrows {
    //% blockIdentity="blocks.custom" enumval=986 block="橘色向上箭頭"
    //% jres alias=ARROW_UP_ORANGE
    ArrowUpOrange = 986,
    //% blockIdentity="blocks.custom" enumval=985 block="洋紅色向下箭頭"
    //% jres alias=ARROW_DOWN_MAGENTA
    ArrowDownMagenta = 985,
    //% blockIdentity="blocks.custom" enumval=984 block="黃色向右箭頭"
    //% jres alias=ARROW_RIGHT_YELLOW
    ArrowRightYellow = 984,
    //% blockIdentity="blocks.custom" enumval=983 block="藍色向左箭頭"
    //% jres alias=ARROW_LEFT_BLUE
    ArrowLeftBlue = 983
}

enum IssHelpColors {
    //% blockIdentity="blocks.custom" enumval=0 block="藍色"
    //% jres alias=BLUE_CARGO
    BlueCargo = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="黃色"
    //% jres alias=YELLOW_CARGO
    YellowCargo = 1,
    //% blockIdentity="blocks.custom" enumval=2 block="洋紅色"
    //% jres alias=MAGENT_CARGO
    MagentaCargo = 2
}

enum DockingRings {
    //% blockIdentity="blocks.custom" enumval=17 block="對接環內圈"
    //% jres alias=DOCKING_RING_INNER
    InnerRing = 17,
    //% blockIdentity="blocks.custom" enumval=236 block="對接環中圈"
    //% jres alias=DOCKING_RING_MIDDLE
    MiddleRing = 236,
    //% blockIdentity="blocks.custom" enumval=159 block="對接環外圈"
    //% jres alias=DOCKING_RING_OUTER
    OuterRing = 159
}

enum DockingObjective {
    //% blockIdentity="blocks.custom" enumval=0 block="設為藍色"
    //% jres alias=SET_TO_BLUE
    GotoBlue = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="設為綠色"
    //% jres alias=SET_TO_GREEN
    GotoGreen = 1,
    //% blockIdentity="blocks.custom" enumval=2 block="設為紅色"
    //% jres alias=SET_TO_RED
    GotoRed = 2
}

enum CrewMealIngredients {
    //% blockIdentity="blocks.custom" enumval=0 block="放入花生"
    //% jres alias=PLACE_PEANUTS
    PlacePeanut = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="放入青椒"
    //% jres alias=PLACE_GREEN_PEPPERS
    PlacePepper = 1,
    //% blockIdentity="blocks.custom" enumval=2 block="放入番茄醬"
    //% jres alias=PLACE_TOMATO_SAUCE
    PlaceSauce = 2
}

enum CrewMealAddIngredients {
    //% blockIdentity="blocks.custom" enumval=0 block="加入鯷魚"
    //% jres alias=ADD_ANCHOIVES
    AddAnchovies = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="加入起司"
    //% jres alias=ADD_CHEESE
    AddCheese = 1,
    //% blockIdentity="blocks.custom" enumval=2 block="加入義式辣香腸"
    //% jres alias=ADD_PEPPERONI
    AddPepperoni = 2,
    //% blockIdentity="blocks.custom" enumval=3 block="加入番茄"
    //% jres alias=ADD_TOMATO
    AddTomato = 3
}

enum RehydrationOptions {
    //% blockIdentity="blocks.custom" enumval=1 block="25 毫升"
    //% jres alias=25_ML
    A25ML = 1,
    //% blockIdentity="blocks.custom" enumval=1 block="50 毫升"
    //% jres alias=50_ML
    A50ML = 1,
    //% blockIdentity="blocks.custom" enumval=0 block="75 毫升"
    //% jres alias=75_ML
    A75ML = 0,
    //% blockIdentity="blocks.custom" enumval=1 block="100 毫升"
    //% jres alias=100_ML
    A100ML = 1
}

enum ExerciseTimes {
    //% block="70 分鐘"
    a,
    //% block="90 分鐘"
    b,
    //% block="110 分鐘"
    c,
    //% block="130 分鐘"
    d,
    //% block="150 分鐘"
    e
}

enum Clockwise {
    //% block="順時針"
    Clockwise,
    //% block="逆時針"
    Counterclockwise
}

enum MoveDirection {
    //% block="朝向"
    Toward,
    //% block="遠離"
    Away
}

enum RotationAmount {
    //% block="90°"
    a = 0,
    //% block="180°"
    b = 1,
    //% block="360°"
    c = 2
}

enum RotationType {
    //% block="俯仰"
    Pitch,
    //% block="偏航"
    Yaw,
    //% block="翻滾"
    Roll
}

enum onOffToggle {
    //% block="開啟"
    a,
    //% block="關閉"
    b
}

enum matrix_y_axis_full {
    //% block="0"
    a,
    //% block="1"
    b,
    //% block="2"
    c,
    //% block="3"
    d,
    //% block="4"
    e,
    //% block="5"
    f,
    //% block="6"
    g,
    //% block="7"
    h,
    //% block="8"
    i,
    //% block="9"
    j
}

enum matrix_x_axis_full {
    //% block="A"  
    LogOak = 17, // LOG
    //% block="B"  
    WhiteConcrete = 236, // CONCRETE
    //% block="C"  
    WhiteTerracotta = 159, // TERRACOTTA
    //% block="D"  
    WhiteStainedGlass = 241, // STAINED GLASS
    //% block="E"  
    WhiteStainedGlassPane = 160, // STAINED GLASS PANE
    //% block="F"  
    StoneSlab = 44, // STONE_SLAB
    //% block="G"  
    RedSandstoneSlab = 182, //STONE_SLAB2
    //% block="H"  
    WhiteShulkerBox = 218, // SHULKER_BOX
    //% block="I"  
    DoubleStoneSlab = 43, // DOUBLE_STONE_SLAB
    //% block="J"  
    DoubleRedSandstoneSlab = 181, // DOUBLE_STONE_SLAB2
    //% block="K"  
    DoubleWoodenSlab = 157, // DOUBLE_WOODEN_SLAB
    //% block="L"  
    OakWoodSlab = 158  // WOODEN_SLAB

}

// global variables
const communicationsTimeout = 100;
const start_game_position = world(0, 7, 0)
const default_signal_block = WHITE_CONCRETE


//%  block="阿提米絲：月球之旅" weight=200 color=#0B3D91 icon="\uf186"
namespace artemis {

    /**
     * 開始遊戲：玩家 1
     */
    //% block="`Generics.blastOff` 準備發射"
    export function startGameP1(): void {
        signalBlock(0, 0, 1, default_signal_block)
    }

    /**
     * 開始遊戲：玩家 2
     */
    //% block="`Generics.blastOff` 準備發射"
    export function startGameP2(): void {
        signalBlock(0, 0, 2, default_signal_block)
    }

    /**
     * 開始遊戲：玩家 3
     */
    //% block="`Generics.blastOff` 準備發射"
    export function startGameP3(): void {
        signalBlock(0, 0, 3, default_signal_block)
    }

    /**
     * 開始遊戲：玩家 4
     */
    //% block="`Generics.blastOff` 準備發射"
    export function startGameP4(): void {
        signalBlock(0, 0, 4, default_signal_block)
    }

    /**
     * 太空垃圾 (活動 16) 收集碎片
     */
    //% block="`Generics.collectDebris` 收集碎片"
    export function collectDebrisA16(): void {
        signalBlock(0, 16, 1, default_signal_block)
    }

    /**
     * 近距離操作 (活動 1)
     * 玩家 2
     */
    //% block="`Generics.orionMove` 移動 %d 推進器"
    export function orionMoveDirectionA1PX(d: MoveDirection): void {
        switch (d) {
            case MoveDirection.Toward:
                signalBlock(0, 1, 1, ORANGE_CONCRETE)
                break;
            case MoveDirection.Away:
                signalBlock(0, 1, 1, default_signal_block)
                break;
        }
    }

    /**
     * 近距離操作 (活動 1)
     * 玩家 2
     */
    //% block="`Generics.orionMove` 將 %r 旋轉 %o"
    export function rotateOrionA2PX(r: Clockwise, o: RotationAmount): void {
        let orion_rotate = 0
        switch (r) {
            case Clockwise.Clockwise:
                orion_rotate = 17 // LOG
                break;
            case Clockwise.Counterclockwise:
                orion_rotate = 236 // CONCRETE
                break;
        }

        let rotation_amount = 0
        switch (o) {
            case RotationAmount.a:
                rotation_amount = 0
                break;
            case RotationAmount.b:
                rotation_amount = 1
                break;
            case RotationAmount.c:
                rotation_amount = 4
                break;
        }

        signalBlock(0, 1, 1, blocks.blockWithData(blocks.blockById(orion_rotate), rotation_amount))
    }

    /**
     * 近距離操作 (活動 1)
     * 玩家 2
     */
    //% block="`Generics.orionMove` 將 %r 調整 %o"
    export function rollOrionA2PX(r: RotationType, o: RotationAmount): void {
        let orion_rotate = 0
        switch (r) {
            case RotationType.Pitch:
                orion_rotate = 17 // LOG
                break;
            case RotationType.Yaw:
                orion_rotate = 1 // STONE
                break;
            case RotationType.Roll:
                orion_rotate = 236 // CONCRETE
                break;
        }

        let rotation_amount = 0
        switch (o) {
            case RotationAmount.a:
                rotation_amount = 0
                break;
            case RotationAmount.b:
                rotation_amount = 2
                break;
            case RotationAmount.c:
                rotation_amount = 4
                break;
        }

        signalBlock(0, 1, 1, blocks.blockWithData(blocks.blockById(orion_rotate), rotation_amount))
    }


    /**
     * 對接測試 (活動 2) 玩家 2
     */
    //% block="將 %r 旋轉至 %o"
    export function rotateRingA2P2(r: DockingRings, o: DockingObjective): void {
        let docking_ring = 0
        switch (r) {
            case DockingRings.InnerRing:
                docking_ring = 17 // LOG
                break;
            case DockingRings.MiddleRing:
                docking_ring = 236 // CONCRETE
                break;
            case DockingRings.OuterRing:
                docking_ring = 159 // TERRACOTTA
                break;
        }

        let docking_color = 0
        switch (o) {
            case DockingObjective.GotoBlue:
                docking_color = 0
                break;
            case DockingObjective.GotoGreen:
                docking_color = 1
                break;
            case DockingObjective.GotoRed:
                docking_color = 2
                break;
        }

        signalBlock(0, 2, 1, blocks.blockWithData(blocks.blockById(docking_ring), docking_color))
    }

    /**
     * 對接測試 (活動 2) 玩家 3
     */
    //% block="將 %r 旋轉至 %o"
    export function rotateRingA2P3(r: DockingRings, o: DockingObjective): void {
        let docking_ring = 0
        switch (r) {
            case DockingRings.InnerRing:
                docking_ring = 17 // LOG
                break;
            case DockingRings.MiddleRing:
                docking_ring = 236 // CONCRETE
                break;
            case DockingRings.OuterRing:
                docking_ring = 159 // TERRACOTTA
                break;
        }

        let docking_color = 0
        switch (o) {
            case DockingObjective.GotoBlue:
                docking_color = 0
                break;
            case DockingObjective.GotoGreen:
                docking_color = 1
                break;
            case DockingObjective.GotoRed:
                docking_color = 2
                break;
        }

        signalBlock(0, 2, 1, blocks.blockWithData(blocks.blockById(docking_ring), docking_color))
    }

    /**
     * 對接測試 (活動 2) 玩家 4
     */
    //% block="將 %r 旋轉至 %o"
    export function rotateRingA2P4(r: DockingRings, o: DockingObjective): void {
        let docking_ring = 0
        switch (r) {
            case DockingRings.InnerRing:
                docking_ring = 17 // LOG
                break;
            case DockingRings.MiddleRing:
                docking_ring = 236 // CONCRETE
                break;
            case DockingRings.OuterRing:
                docking_ring = 159 // TERRACOTTA
                break;
        }

        let docking_color = 0
        switch (o) {
            case DockingObjective.GotoBlue:
                docking_color = 0
                break;
            case DockingObjective.GotoGreen:
                docking_color = 1
                break;
            case DockingObjective.GotoRed:
                docking_color = 2
                break;
        }

        signalBlock(0, 2, 1, blocks.blockWithData(blocks.blockById(docking_ring), docking_color))
    }

    /**
     * 輻射演練 (活動 3)
     * 玩家 4
     */
    //% block="`Generics.clearCargo` 清空貨物"
    export function clearShelterA3P2(): void {
        signalBlock(0, 3, 2, default_signal_block)
    }

    /**
     * 輻射演練 (活動 3)
     * 玩家 3
     */
    //% block="`Generics.surroundShelter` 圍起避難所"
    export function surroundShelterA3P3(): void {
        signalBlock(0, 3, 3, default_signal_block)
    }

    /**
     * 輻射演練 (活動 3)
     * 玩家 2
     */
    //% block="`Generics.coverShelter` 覆蓋避難所"
    export function coverShelterA3P4(): void {
        signalBlock(0, 3, 4, default_signal_block)
    }


    /**
     * 人體生理 (活動 4) 玩家 2
     */
    //% block="`Generics.exercise` 運動 %t"
    export function exerciseTimeA4P2(t: ExerciseTimes): void {
        switch (t) {
            case ExerciseTimes.a:
                signalBlock(0, 4, 2, default_signal_block)
                break;
            case ExerciseTimes.b:
                signalBlock(0, 4, 2, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.c:
                signalBlock(0, 4, 2, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.d:
                signalBlock(0, 4, 2, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.e:
                signalBlock(0, 4, 2, ORANGE_CONCRETE)
                break;

        }
    }

    /**
     * 人體生理 (活動 4) 玩家 3
     */
    //% block="`Generics.exercise` 運動 %t"
    export function exerciseTimeA4P3(t: ExerciseTimes): void {
        switch (t) {
            case ExerciseTimes.a:
                signalBlock(0, 4, 3, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.b:
                signalBlock(0, 4, 3, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.c:
                signalBlock(0, 4, 3, default_signal_block)
                break;
            case ExerciseTimes.d:
                signalBlock(0, 4, 3, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.e:
                signalBlock(0, 4, 3, ORANGE_CONCRETE)
                break;

        }
    }

    /**
     * 人體生理 (活動 4) 玩家 4
     */
    //% block="`Generics.exercise` 運動 %t"
    export function exerciseTimeA4P4(t: ExerciseTimes): void {
        switch (t) {
            case ExerciseTimes.a:
                signalBlock(0, 4, 4, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.b:
                signalBlock(0, 4, 4, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.c:
                signalBlock(0, 4, 4, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.d:
                signalBlock(0, 4, 4, ORANGE_CONCRETE)
                break;
            case ExerciseTimes.e:
                signalBlock(0, 4, 4, default_signal_block)
                break;

        }
    }

    /**
     * 火星偵察 (活動 11)
     */
    //% block="`Generics.takePicture` 拍照"
    export function takePictureA11(): void {
        signalBlock(0, 11, 1, default_signal_block)
    }

    /**
     * 建材方塊 (活動 5)
     * 玩家 1
     */
    //% block="`Generics.roverMove` 探測車向 %d 移動 %n"
    export function roverMoveA5(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }
    }

    /**
     * 建材方塊 (活動 5)
     * 玩家 1
     */
    //% block="`Generics.collectRegolith` 收集月壤"
    export function collectBlockA5(): void {
        signalBlock(0, 5, 1, default_signal_block)
    }

    /**
     * 建材方塊 (活動 5)
     * 玩家 2
     */
    //% block="`Generics.meltRegolith` 處理月壤"
    export function meltRegolithA5(): void {
        signalBlock(0, 5, 2, default_signal_block)
    }

    /**
     * 建材方塊 (活動 5)
     * 玩家 2
     */
    //% block="`Generics.castRegolith` 鑄造方塊"
    export function castBlocksA5(): void {
        signalBlock(1, 5, 2, default_signal_block)
    }

    /**
     * 建材方塊 (活動 5)
     * 玩家 2
     */
    //% block="`Generics.testBlockStrength` 測試方塊強度"
    export function testBlockStrengthA5(): void {
        signalBlock(2, 5, 2, default_signal_block)
    }

    /**
     * 冰層鑽探 (活動 6)
     * 玩家 1
     */
    //% block="`Generics.roverMove` 探測車向 %d 移動 %n"
    export function roverMoveA6(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }
    }

    /**
     * 冰層鑽探 (活動 6)
     * 玩家 2
     */
    //% block="`Generics.drillDown` 向下鑽探"
    export function drillDownA6(): void {
        signalBlock(0, 6, 2, default_signal_block)
    }

    /**
     * 冰層鑽探 (活動 6)
     * 玩家 2
     */
    //% block="`Generics.collectSample` 收集樣本"
    export function collectSampleA6(): void {
        signalBlock(1, 6, 2, default_signal_block)
    }

    /**
     * 月球測繪 (活動 8) 玩家 1
     */
    //% block="`Generics.markLocation` 標記位置 $x_axis $y_axis"
    export function setLocationA8P1(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 8, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * 月球測繪 (活動 8) 玩家 2
     */
    //% block="`Generics.takePicture` 拍照"
    export function takePictureA8P2(): void {
        signalBlock(0, 8, 2, default_signal_block)
    }

    /**
     * 月球測繪 (活動 8) 玩家 2
     * 玩家 1
     */
    //% block="`Generics.viperMove` VIPER 探測車向 %d 移動 %n"
    export function viperMoveA8P2(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }
    }

    /**
     * 太空人餐點 (活動 9)
     * 玩家 1
     */
    //% block="`Generics.PowerSwitch` 切換電源 %i"
    export function togglePowerA9P1(i: onOffToggle): void {
        switch (i) {
            case onOffToggle.a:
                signalBlock(0, 9, 1, default_signal_block)
                break;
            case onOffToggle.b:
                signalBlock(0, 9, 1, ORANGE_CONCRETE)
                break;
        }
    }

    /**
     * 太空人餐點 (活動 9)
     * 玩家 1
     */
    //% block="`Generics.place` 放入冷凍乾燥的 %i"
    export function placeIngredientA9P1(i: CrewMealIngredients): void {
        switch (i) {
            case CrewMealIngredients.PlacePeanut:
                signalBlock(1, 9, 1, ORANGE_CONCRETE)
                break;
            case CrewMealIngredients.PlacePepper:
                signalBlock(1, 9, 1, ORANGE_CONCRETE)
                break;
            case CrewMealIngredients.PlaceSauce:
                signalBlock(1, 9, 1, default_signal_block)
                break;
        }
    }

    /**
     * 太空人餐點 (活動 9)
     * 玩家 1
     */
    //% block="`Generics.Rehydrate` 加入 %i 水還原"
    export function rehydrateA9P1(i: RehydrationOptions): void {
        switch (i) {
            case RehydrationOptions.A25ML:
                signalBlock(2, 9, 1, YELLOW_CONCRETE)
                break;
            case RehydrationOptions.A50ML:
                signalBlock(2, 9, 1, ORANGE_CONCRETE)
                break;
            case RehydrationOptions.A75ML:
                signalBlock(2, 9, 1, WHITE_CONCRETE)
                break;
            case RehydrationOptions.A100ML:
                signalBlock(2, 9, 1, GREEN_CONCRETE)
                break;
        }
    }

    /**
     * 太空人餐點 (活動 9)
     * 玩家 2
     */
    //% block="`Generics.plus` 加入 %i"
    export function addIngredientsA9P2(i: CrewMealAddIngredients): void {
        switch (i) {
            case CrewMealAddIngredients.AddAnchovies:
                signalBlock(0, 9, 2, default_signal_block)
                break;
            case CrewMealAddIngredients.AddCheese:
                signalBlock(0, 9, 2, ORANGE_CONCRETE)
                break;
            case CrewMealAddIngredients.AddPepperoni:
                signalBlock(0, 9, 2, YELLOW_CONCRETE)
                break;
            case CrewMealAddIngredients.AddTomato:
                signalBlock(0, 9, 2, GREEN_CONCRETE)
                break;
        }
    }

    /**
     * 太空人餐點 (活動 9)
     * 玩家 2
     */
    //% block="`Generics.pizzaServe` 供應披薩"
    export function servePizzaA9P2(): void {
        signalBlock(1, 9, 2, default_signal_block)
    }

    /**
     * 小行星採礦 (活動 12)
     */
    //% block="`Generics.mineBlock` 開採小行星"
    export function mineAsteroidA12(): void {
        signalBlock(0, 12, 1, default_signal_block)
    }

    /**
     * 月球花園 (活動 13)
     * 玩家 1
     */
    //% block="`Generics.agentMove` Agent 向 %d 移動 %n"
    export function agentMoveA13(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Forward, n)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Back, n)
                break;
        }
    }

    /**
     * 水資源回收 (活動 20)
     */
    //% block="`Generics.agentMove` Agent 向 %d 移動 %n"
    export function agentMoveA20(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Forward, n)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Back, n)
                break;
        }
    }

    /**
     * 水資源回收 (活動 20)
     */
    //% block="`Generics.removeDebris` 移除碎片"
    export function removeDebrisA20(): void {
        signalBlock(0, 20, 1, default_signal_block)
    }

    /**
     * 月球花園 1 (活動 13)
     */
    //% block="`Generics.plantSeed` 種下種子"
    export function lunarGarden1A13(): void {
        signalBlock(0, 13, 1, default_signal_block)
    }

    /**
     * 協助國際太空站 (活動 21)
     * 藍色目標
     */
    //% block="`Generics.retrieveCargo` 取回貨物 %c"
    export function retrieveBlueGoalA21(c: IssHelpColors): void {
        let docking_ring = RED_CONCRETE
        switch (c) {
            case IssHelpColors.BlueCargo:
                docking_ring = default_signal_block
                break;
        }

        signalBlock(0, 21, 1, docking_ring)
    }

    /**
     * 協助國際太空站 (活動 21)
     * 黃色目標
     */
    //% block="`Generics.retrieveCargo` 取回貨物 %i"
    export function retrieveYellowGoalA21(c: IssHelpColors): void {
        let docking_ring = RED_CONCRETE
        switch (c) {
            case IssHelpColors.YellowCargo:
                docking_ring = default_signal_block
                break;
        }

        signalBlock(0, 21, 1, docking_ring)
    }
    /**
     * 協助國際太空站 (活動 21)
     * 洋紅色目標
     */
    //% block="`Generics.retrieveCargo` 取回貨物 %i"
    export function retrieveMagentaGoalA21(c: IssHelpColors): void {
        let docking_ring = RED_CONCRETE
        switch (c) {
            case IssHelpColors.MagentaCargo:
                docking_ring = default_signal_block
                break;
        }

        signalBlock(0, 21, 1, docking_ring)
    }

    /**
     * 協助國際太空站 (活動 21)
     * 裝載貨物
     */
    //% block="`Generics.loadCargo` 裝載貨物"
    export function loadCargoA21(): void {
        signalBlock(0, 21, 1, ORANGE_CONCRETE)
    }


    /**
     * Agent 移動：步幅 1
     */
    //% block="`Generics.agentMove` Agent 向 %d 移動 %n"
    export function agentMoveFoot1(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n)
                break;
        }
    }

    /**
     * Agent 移動：步幅 3
     */
    //% block="`Generics.agentMove` Agent 向 %d 移動 %n"
    export function agentMoveFoot3(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }

    }

    /**
     * 太空垃圾 (活動 16) ADRV 移動
     */
    //% block="`Generics.agentMove` Agent 向 %d 移動 %n"
    export function adrvMoveA16(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Forward, n)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Back, n)
                break;
        }
    }

    /**
     * 小行星採礦 (活動 12) 探測車移動
     */
    //% block="`Generics.roverMove` 探測車向 %d 移動 %n"
    export function roverMoveA12(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n)
                break;
        }
    }


    /**
     * 火星偵察 (活動 11) 探測車移動
     */
    //% block="`Generics.ingenuityMove` 機智號向 %d 移動 %n"
    export function roverMoveA11(d: FourDirectionArrows, n: number): void {
        switch (d) {
            case FourDirectionArrows.ArrowUpOrange:
                agent.move(SixDirection.Up, n * 3)
                break;
            case FourDirectionArrows.ArrowDownMagenta:
                agent.move(SixDirection.Down, n * 3)
                break;
            case FourDirectionArrows.ArrowRightYellow:
                agent.move(SixDirection.Right, n * 3)
                break;
            case FourDirectionArrows.ArrowLeftBlue:
                agent.move(SixDirection.Left, n * 3)
                break;
        }
    }

    /**
     * 極光攝影 (活動 14)
     */
    //% block="`Generics.takePicture` 拍照 $x_axis $y_axis"
    export function takePictureA14(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 14, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * 獵戶座濺落 (活動 15)
     */
    //% block="`Generics.markLocation` 設定位置 $x_axis $y_axis"
    export function setLocationA15(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 15, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * 登陸地點 (活動 17)
     */
    //% block="`Generics.markLocation` 標記位置 $x_axis $y_axis"
    export function markLocationA17(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 17, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * 地球污染 (活動 18)
     */
    //% block="`Generics.deployCubesat` 部署立方衛星 $x_axis $y_axis"
    export function deployCubsatA18(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 18, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    /**
     * 雷射對準 (活動 19)
     */
    //% block="`Generics.setAlignment` 將對準位置設為 $x_axis $y_axis"
    export function setAlignmentA19(x_axis: matrix_x_axis_full, y_axis: matrix_y_axis_full): void {
        signalBlock(0, 19, 1, blocks.blockWithData(blocks.blockById(x_axis), y_axis))
    }

    // helper functions
    function signalBlock(step: number, activity: number, player: number, block: Block): void {
        blocks.place(block, world(step, activity, player))
        loops.pause(communicationsTimeout)
    }

}