var tipuesearch = {"pages": [{'title': 'About', 'text': '網站:\xa0 https://mdecd2023.github.io/football-apj1 \xa0 \n 倉儲: \xa0 https://github.com/mdecd2023/football-apj1 \n 討論區:\xa0 https://github.com/mdecd2023/football-apj1/discussions \n', 'tags': '', 'url': 'About.html'}, {'title': '足球場景', 'text': 'bubbleRob1 與 bubbleRob2 分別透過 19997 與 19998 埠號交由雙方的 Python remoteAPI 進行控制 \n 場景串流埠號: 23020 \n 假設: 19997 與 bubbleRob1 的控制在一台 Windows 10 電腦上, 而 19998 則交由另外一台電腦控制. \n', 'tags': '', 'url': '足球場景.html'}, {'title': '評分', 'text': '2a w6-2 Python remoteAPI 連線查驗結果.txt \n 2a 學號與 Githbu 帳號對應名單 \n 還需要設法取得各組組員名單, 然後再換成學號 \n 請各組在 pj1 分組網頁中, 以 w6 (H2) 作為頁面標題, 直接在頁面中, 列出完成連線的分組與未完成連線的分組組員學號.\xa0 \n 預計採用 Brython 讀取上面兩個連結資料後, 再逐一利用迴圈進行比對 \n  建立 Brython 環境  \n \n \n \n \n \n \n', 'tags': '', 'url': '評分.html'}, {'title': 'pj1', 'text': '', 'tags': '', 'url': 'pj1.html'}, {'title': 'ag1', 'text': '2a-pj1ag1組員:41023147紀閔翔、41023143施建菖 \n pj1倉儲: https://github.com/mdecd2023/2a-pj1ag1 \xa0 \n pj1網頁: https://mdecd2023.github.io/2a-pj1ag1/content/project1.html \xa0 \n 1.建立 球框 \n \n == \n 感測器lua \n function sysCall_init()\n    score1 = 0\n    \n    sensor = sim.getObject(\'./sensor\')\n    xml = [[\n         \n         \n         \n     \n         \n    ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\n    bubbleRob = sim.getObject(\'/bubbleRob\')\n    ball = sim.getObject(\'/ball\')\n    bubbleRob2 = sim.getObject(\'/bubbleRob2\')\n    initialPosition = sim.getObjectPosition(bubbleRob, -1)\n    initialOrientation = sim.getObjectOrientation(bubbleRob, -1)\n    initialPosition2 = sim.getObjectPosition(bubbleRob2, -1)\n    initialOrientation2 = sim.getObjectOrientation(bubbleRob2, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n\nend\n\n\nfunction sysCall_actuation()\n    --simUI.setLabelText(ui, 30, tostring(sim.getFloatSignal("myVariable")))\n    result=sim.readProximitySensor(sensor)\n    if(score1<5)then\n        if(result>0)then\n            score2 = score1+1\n            simUI.setLabelText(ui, 30, tostring(score2))\n\n            sim.setObjectPosition(bubbleRob, -1, initialPosition)\n            sim.setObjectOrientation(bubbleRob, -1, initialOrientation)\n            sim.setObjectPosition(bubbleRob2, -1, initialPosition2)\n            sim.setObjectOrientation(bubbleRob2, -1, initialOrientation2)\n            sim.setObjectPosition(ball, -1, initialballPosition)\n            sim.setObjectOrientation(ball, -1, initialballOrientation)\n            score1=score2\n        end\n    else\n        sim.pauseSimulation()\n    end\nend\nend \n \n == \n 使用方向鍵操控車子並得分 \n \n', 'tags': '', 'url': 'ag1.html'}, {'title': 'ag2', 'text': '2a-pj1ag2組員:41023146洪偉陞、41023148夏進源 \n pj1倉儲: https://github.com/mdecd2023/2a-pj1ag2 \n pj1網頁: https://mdecd2023.github.io/2a-pj1ag2/content/index.html \n bubbleRob足球遊戲 \n 1.先繪製球框( ball frame.7z ) \n \n 2.使用鍵盤控制 bubbleRob \n \n function sysCall_init()  \n    right_wheel= sim.getObjectHandle(\'joint1\') \n    left_wheel= sim.getObjectHandle(\'joint2\') \n    right_velocity=0 \n    left_velocity=0\n    speed=5\n    sim.setJointTargetVelocity(right_wheel,0)\n    sim.setJointTargetVelocity(left_wheel,0)\n \nend\n  \nfunction sysCall_actuation()  \n    message,auxiliaryData=sim.getSimulatorMessage() \n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            \n            if (auxiliaryData[1]==32) then\n\n                right_velocity=0 \n                left_velocity=0 \n                sim.setJointMaxForce(right_wheel, 0) \n                sim.setJointMaxForce(left_wheel, 0) \n                break\n            else\n                sim.setJointMaxForce(right_wheel, 10) \n                sim.setJointMaxForce(left_wheel, 10)\n            \n            \n                if (auxiliaryData[1]==2007) then -- up key\n                    \n                    sim.setJointTargetVelocity(right_wheel,speed)\n                    sim.setJointTargetVelocity(left_wheel,speed)\n                end\n                if (auxiliaryData[1]==2008) then -- down key\n                    \n                    sim.setJointTargetVelocity(right_wheel,-speed/2)\n                    sim.setJointTargetVelocity(left_wheel,-speed/2)\n                    \n                end\n                if (auxiliaryData[1]==2009) then -- left key\n                    sim.setJointTargetVelocity(right_wheel,speed)\n                    sim.setJointTargetVelocity(left_wheel,speed/2)\n                   \n                end\n                if (auxiliaryData[1]==2010) then -- right key\n                    sim.setJointTargetVelocity(right_wheel,speed/2)\n                    sim.setJointTargetVelocity(left_wheel,speed)\n                    \n                end\n\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\nend \n \n 3.加入球框感測器和記分板( newbubbleRob.ttt ) \n \n 感測器lua腳本 \n function sysCall_init()\n    score1 = 0\n    \n    sensor = sim.getObject(\'./sensor\')\n    xml = [[\n        <ui title="Scoreboard" closeable="false" resizable="false" style="plastique">\n        <label text="Score:" style="* {background-color: #808080; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px; }" id="10"/>\n        <label text="0" style="* {background-color: #FFF; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px;}" id="30"/>\n     \n        </ui>\n    ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\n    bubbleRob = sim.getObject(\'/bubbleRob\')\n    ball = sim.getObject(\'/ball\')\n    bubbleRob2 = sim.getObject(\'/bubbleRob2\')\n    initialPosition = sim.getObjectPosition(bubbleRob, -1)\n    initialOrientation = sim.getObjectOrientation(bubbleRob, -1)\n    initialPosition2 = sim.getObjectPosition(bubbleRob2, -1)\n    initialOrientation2 = sim.getObjectOrientation(bubbleRob2, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n\nend\n\n\nfunction sysCall_actuation()\n    --simUI.setLabelText(ui, 30, tostring(sim.getFloatSignal("myVariable")))\n    result=sim.readProximitySensor(sensor)\n    if(score1<5)then\n        if(result>0)then\n            score2 = score1+1\n            simUI.setLabelText(ui, 30, tostring(score2))\n\n            sim.setObjectPosition(bubbleRob, -1, initialPosition)\n            sim.setObjectOrientation(bubbleRob, -1, initialOrientation)\n            sim.setObjectPosition(bubbleRob2, -1, initialPosition2)\n            sim.setObjectOrientation(bubbleRob2, -1, initialOrientation2)\n            sim.setObjectPosition(ball, -1, initialballPosition)\n            sim.setObjectOrientation(ball, -1, initialballOrientation)\n            score1=score2\n        end\n    else\n        sim.pauseSimulation()\n    end\nend \n \n 4.改成用遠端api操控bubbleRob前後左右移動( bubbleRob.7z ) \n \n <<<<<<< HEAD', 'tags': '', 'url': 'ag2.html'}, {'title': 'ag4', 'text': '2a-pj1ag4組員:41023125、41023128 \n pj1ag4倉儲: https://github.com/mdecd2023/2a-pj1ag4 \n pj1ag4網頁: https://mdecd2023.github.io/2a-pj1ag4 \n 2a-pj1ag14 分組報告pdf \n \n 歷程 \n 3/24 完成將bubbleRob 雙輪車調整成手動模式 \n 利用awsd鍵進行移動 \n \n \n 觸發特定條件使 bubbleRob 雙輪車 回到原位 \n \n 3/25 完成足球製作以及 觸發條件設定製作 \n 使球觸碰到球門的感測器後重製球場 \n \n 紀錄初始位置 \n \n 重製位置 \n \n 3/26 增加放開鍵盤會停止、倒數計時、記分板 \n 增加放開鍵盤一段時間後會將速度設為0直到按下鍵盤 \n \n 增加倒數計時與分數的面板 \n 開始後開始倒數計時 \n 時間到則結束 \n \n 兩邊感測與計算皆完成 \n \n 記分板與計時程式 \n \n 3/29 連線問題解決 \n 將操作的程式轉成python \n 4/12 確認連機遊玩可執行 \n 加入歡迎跟恭喜 \n \n \n \n 共經歷了八個版本改版 \n 前七個版本: bubbleRob紀錄.7z \n 最終版: bubbleRob.7z \n 裡面包含了my_ip.txt ip.bat\xa0\xa0ip.py\xa0bubbleRob2.py\xa0bubbleRob.py\xa0bubbleRob_scenes.ttt等 \n 點擊 ip.bat就能直接獲取到目前電腦的ipv4位置 \n \n \n \xa0加入遊戲所在電腦ip 只需輸入ip ( 遊戲所在電腦ip ) \n \n \n 程式 \n 場景部分將程式將拆成了許多部分 \n 用以方便維修 \n function sysCall_init()\n-- 場景模擬開始時開啟19998與23020埠號\nsimRemoteApi.start(19998)\nsimRemoteApi.start(23020)\nend \n \n function sysCall_init()\n    --紀錄初始位置並在得分時重置位置\n    --倒數計時與計算分數並顯示等\n    sensor = sim.getObject(\'./sensor\')\n    sensor2 = sim.getObject(\'./sensor2\')\n    bubbleRobBase = 197\n    bubbleRobBase2 = 210\n    ball = 206\n    initialBubbleRobPosition = sim.getObjectPosition(bubbleRobBase, -1)\n    initialBubbleRobOrientation = sim.getObjectOrientation(bubbleRobBase, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n    initial2Position = sim.getObjectPosition(bubbleRobBase2, -1)\n    initial2Orientation = sim.getObjectOrientation(bubbleRobBase2, -1)\n    -- do some initialization here\n    count = 1800  -- ??30????????????\n    score1 = 0  -- ??????\n    score2 = 0\n    xml = [[\n        <ui closeable="false" resizeable="false" activate="false">\n            <label text="30:00" style="* {background-color: #F00; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="10"/>\n            <label text="0" style="* {background-color: #00F; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="20"/>\n            <label text="0" style="* {background-color: #00F; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="30"/>\n        </ui>\n    ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(sensor)\n    result2=sim.readProximitySensor(sensor2)\n    --if sim.getSimulationTime() == 0 then\n        --sim.pauseSimulation()\n    --end\n\n    -- 0 or 1\n    if(result>0)then\n        sim.pauseSimulation()\n        sim.setObjectPosition(bubbleRobBase, -1, initialBubbleRobPosition)\n        sim.setObjectOrientation(bubbleRobBase, -1, initialBubbleRobOrientation)\n        sim.setObjectPosition(ball, -1, initialballPosition)\n        sim.setObjectOrientation(ball, -1, initialballOrientation)\n        sim.setObjectPosition(bubbleRobBase2, -1, initial2Position)\n        sim.setObjectOrientation(bubbleRobBase2, -1, initial2Orientation)\n        score1 = score1 +1 \n        \n    end\n    if(result2>0)then\n        sim.pauseSimulation()\n        sim.setObjectPosition(bubbleRobBase, -1, initialBubbleRobPosition)\n        sim.setObjectOrientation(bubbleRobBase, -1, initialBubbleRobOrientation)\n        sim.setObjectPosition(ball, -1, initialballPosition)\n        sim.setObjectOrientation(ball, -1, initialballOrientation)\n        sim.setObjectPosition(bubbleRobBase2, -1, initial2Position)\n        sim.setObjectOrientation(bubbleRobBase2, -1, initial2Orientation)\n        score2 = score2 +1 \n        \n    end\n    if count > 0 then\n        count = count - 1\n        local minutes = math.floor(count / 60)\n        local seconds = count % 60\n        local timeStr = string.format("%d:%02d", minutes, seconds)\n        simUI.setLabelText(ui, 10, timeStr)\n        simUI.setLabelText(ui, 20, tostring(score1))\n        simUI.setLabelText(ui, 30, tostring(score2))\n    else\n        sim.stopSimulation()\n    end\n\nend\n \n function sysCall_init()\n    --開始時暫停模擬並顯示welcome to play\n    --之後顯示congratulations on getting a point\n    xml1 = [[\n        <ui closeable="false" resizeable="false" activate="false">\n            <label text="welcome to play" style="* {background-color: #00F; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="1"/>\n        </ui>\n    ]]\n    ui1 = simUI.create(xml1)\n    add = true \n    -- Pause simulation on the first run\n    sim.pauseSimulation(true)\nend\n\nfunction sysCall_actuation()\n    simUI.hide(ui1)\n    \n    \n    \nend\n\nfunction sysCall_suspend()\n    simUI.show(ui1)\n    --simUI.setLabelText(ui1, 1, "good game")\n    if add == false then \n        simUI.setLabelText(ui1, 1, "congratulations on getting a point")\n    end\n    add = false\nend\n \n python操控部分 \n #bubbleRob.py\nimport sim\nimport sys, math\nimport keyboard\nimport time\n\nwith open(\'my_ip.txt\', \'r\') as f:\n    my_ip1 = f.readlines()\n    for line in my_ip1:\n        if \'game\' in line: #game #myip #local\n            ip = line.split(\':\')[1].strip()\n            print(ip)\n\n# 連接到 CoppeliaSim simulation\nsim.simxFinish(-1)\nclientID = sim.simxStart(ip, 19997, True, True, 5000, 5)\nsim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)\n\nif clientID != -1:\n    print("已連線到遠端 CoppeliaSim 伺服器")\nelse:\n    print(\'連線失敗\')\n    sys.exit(\'無法連線到 CoppeliaSim 伺服器\')\n\n# 取得馬達與感測器的 handles\nerrorCode, leftMotor = sim.simxGetObjectHandle(clientID, \'leftMotor\', sim.simx_opmode_oneshot_wait)\nerrorCode, rightMotor = sim.simxGetObjectHandle(clientID, \'rightMotor\', sim.simx_opmode_oneshot_wait)\nerrorCode, sensingNose = sim.simxGetObjectHandle(clientID, \'sensingNose\', sim.simx_opmode_oneshot_wait)\n\n# 設定一些參數\ndeg = math.pi/180\npaused = False\nif errorCode == -1:\n    print(\'找不到左右馬達\')\n    sys.exit()\n\ndef jointspeed(left,right):\n    errorCode4=sim.simxSetJointTargetVelocity(clientID,leftMotor,left, sim.simx_opmode_oneshot)\n    errorCode5=sim.simxSetJointTargetVelocity(clientID,rightMotor,right, sim.simx_opmode_oneshot_wait)\nerrorCode, number2 = sim.simxLoadModel(clientID, \'number2.ttm\', 0, sim.simx_opmode_oneshot_wait)   \nwhile sim.simxGetConnectionId(clientID) != -1:\n    event = keyboard.read_event()\n    if event.event_type == \'down\':\n        print(\'The "\' + event.name + \'" key was pressed.\')\n    if event.name == \'a\' :\n        jointspeed(-3,5)\n    elif event.name == \'w\' :\n        jointspeed(5,5)\n    elif event.name == \'s\' :\n        jointspeed(-5,-5)\n    elif event.name == \'d\' :\n        jointspeed(5,-3)\n    if event.name == \'p\':\n        if not paused:\n            print(\'Paused\')\n            sim.simxPauseSimulation(clientID, sim.simx_opmode_oneshot_wait)\n            paused = True\n            time.sleep(0.1)\n        else:\n            print(\'Resumed\')\n            sim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)\n            paused = False\n            time.sleep(0.1)\n \n #bubbleRob2.py\nimport sim\nimport sys, math\nimport keyboard\nimport time\n\nwith open(\'my_ip.txt\', \'r\') as f:\n    my_ip1 = f.readlines()\n    for line in my_ip1:\n        if \'game\' in line: #game #myip #local\n            ip = line.split(\':\')[1].strip()\n            print(ip)\n\n\n# 連接到 CoppeliaSim simulation\nsim.simxFinish(-1)\nclientID = sim.simxStart(ip, 19998, True, True, 5000, 5)\nsim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)\n\nif clientID != -1:\n    print("已連線到遠端 CoppeliaSim 伺服器")\nelse:\n    print(\'連線失敗\')\n    sys.exit(\'無法連線到 CoppeliaSim 伺服器\')\n\n# 取得馬達與感測器的 handles\nerrorCode, sensingNose = sim.simxGetObjectHandle(clientID, \'sensingNose\', sim.simx_opmode_oneshot_wait)\nerrorCode = 0\nleftMotor = 216\nrightMotor = 214\nprint(errorCode)\n# 設定一些參數\ndeg = math.pi/180\npaused = False\nif errorCode == -1:\n    print(\'找不到左右馬達\')\n    sys.exit()\n\ndef jointspeed(left,right):\n    errorCode4=sim.simxSetJointTargetVelocity(clientID,leftMotor,left, sim.simx_opmode_oneshot)\n    errorCode5=sim.simxSetJointTargetVelocity(clientID,rightMotor,right, sim.simx_opmode_oneshot_wait)\nerrorCode, number2 = sim.simxLoadModel(clientID, \'number2.ttm\', 0, sim.simx_opmode_oneshot_wait)   \nwhile sim.simxGetConnectionId(clientID) != -1:\n    event = keyboard.read_event()\n    if event.event_type == \'down\':\n        print(\'The "\' + event.name + \'" key was pressed.\')\n    if event.name == \'a\' :\n        jointspeed(-3,5)\n    elif event.name == \'w\' :\n        jointspeed(5,5)\n    elif event.name == \'s\' :\n        jointspeed(-5,-5)\n    elif event.name == \'d\' :\n        jointspeed(5,-3)\n    if event.name == \'p\':\n        if not paused:\n            print(\'Paused\')\n            sim.simxPauseSimulation(clientID, sim.simx_opmode_oneshot_wait)\n            paused = True\n            time.sleep(0.1)\n        else:\n            print(\'Resumed\')\n            sim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)\n            paused = False\n            time.sleep(0.1)\n\n \n \n 遊戲說明 \n 開啟場景後便可以使用19997進行連線 \n 如果成功連線便會顯示 \n \n 這時23020與19998埠號便會開啟 \n 第二位玩家便可利用19998加入遊戲 \n 加入成功便會立即開始 \n 玩家可利用wasd進行操控 \n 觀戰者可以利用23020埠號進行觀戰 \n 一方得分後便會暫停遊戲並還原場地 \n 按下p則繼續遊戲 \n 時間到便會結束遊戲 \n 歡迎與恭喜lua程式 \n \n \n 缺陷 \n 1.在23020埠號的觀戰者無法查看到分數與時間,只能顯示在場景的主畫面上 \n 2.機器人的機體不適合推球 \n 3.遊戲結束後可以加入哪方勝利字樣 \n 4.計分可以拆分成兩方並標示(藍方紅方等)以便了解比分情況 \n 5.翻車時目前沒有自救空間 \n 可以增加按鍵來達成加機器擺正 \n 6.按鍵指令只能觸發一個 \n 造成動作不夠連貫 \n 希望能做到同時按兩個鍵 \n 將會有更高的操作性 \n 補充 \n sensingNose其實沒有實際用處 \n 不拔除主要原因是可以用來凸顯bubbleRob的移動方向 \n 心得 \n 這次的專案從中學習到了CoppeliaSim的remoteApi實際運作方式 \n 也對CoppeliaSim的lua與python的寫法有更深得了解 \n 對於CoppeliaSim的句柄用法了解透徹能夠靈活運用 \n 不過對於sim.py函式庫的使用依舊有加強空間 \n 許多函式不熟悉只能使用替代方案執行 \n 編寫程式時可以多利用print \n 不管是除錯或者理解暫存的內容都好用 \n lua的寫法與習慣的pyhton略有不同 \n 例如 \n --lua註解 \n #python註解 \n lua程式後面需要加上end表示結束 \n 但不需要像python重視縮排 \n -- lua 的if \n if *條件* then *輸出* elseif *條件2* then *輸出2* else *輸出3* end \n python不需要then 且elif跟lua的elseif寫法不同需要注意 \n -- lua 的whilefunction sysCall_actuation() \n *程式* \n end \n 跟python的while True:類似無限循環執行到結束', 'tags': '', 'url': 'ag4.html'}, {'title': 'ag5', 'text': '組長: 41023121 李承翰 ， 組員：41023134 林建維 \n 網頁 \xa0 https://mdecd2023.github.io/2a-pj1ag5/content/index.html \n 倉儲 \xa0 https://github.com/mdecd2023/2a-pj1ag5 \n bubbleRob足球遊戲 \n \n 球框.stl    球框.prt \n \n \n \n 兩台車車加球框.ttt \n \n \n 計分.ttt \n \n sensor.txt   sensor2.txt   newbing_bubbleRob.rar \n \n 兩台車車對戰影片 \n \n 這學期的課程節奏十分緊湊，我也花了許多的時間在了解程式及原理，雖然現在有AI的協助但是AI必須問得非常精準才能得到我想要的答案，像是程式出錯時的回應他能很精準地回答，但是如果是問他程式的問題時他有時會列出很多種可能，看到其實心很累啊。這次的車車老實說大部分還是由老師所提供也謝謝同學的教導與修正我才能如期完成這項作業。 \n', 'tags': '', 'url': 'ag5.html'}, {'title': 'ag6', 'text': '組員：呂佳柔41023104 王啟騰41023112 \n pj1ag6網站\xa0 https://mdecd2023.github.io/2a-pj1ag6/content/index.html \xa0 \n pj1ag6倉儲\xa0 https://github.com/mdecd2023/2a-pj1ag6 \xa0 \n BubbleRob \n 1.在 Tutorial1 中以 CoppeliaSim 建立 bubbleRob 機器人，添加關節給予馬力、 利用近接感測器偵測障礙物並透過 Lua script 控制 bubbleRob 雙輪車的移動。 \n 2. 繪製球場 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 球場.SLDPRT \xa0\xa0 球場.STL \n \n 3.加入感測器 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n \n 4.加入bubbleRob和球 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n \n \n \n 5.加入程式碼 \n \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n Football.ttt \xa0 \xa0 bubbleRob.rar \xa0\xa0 sensor.txt \xa0\xa0 sensor2.txt \n \n \n \n', 'tags': '', 'url': 'ag6.html'}, {'title': 'ag7', 'text': '2a-pj1ag7組員:41023106李凱新、 \n 倉儲: https://github.com/mdecd2023/2a-pj1ag7 \n 網頁: \xa0 https://mdecd2023.github.io/2a-pj1ag7/ \n /downloads/2.ttt /downloads/球場.STL \n \n 1.製作球場 \n \n \n 2.放入bubbleRob \n \n \n 在 CoppeliaSim 中，當您啟動仿真場景時，將自動執行名為  "sysCall_init"  的回調函數。這裡的函數體沒有任何操作，因此在場景啟動時不會執行任何代碼。 \n print 是甚麼用途? 在 Lua 中，print 函數是用於輸出一些信息到控制台的函數。它通常被用於調試和測試程式碼時，幫助程式設計師理解程式碼的執行過程。 \n 例如，您可以使用 print 函數輸出一些變數的值，以了解它們的值是否符合預期。您還可以使用 print 函數輸出一些程式狀態資訊，以確保程式按照您的預期執行。 \n 在 CoppeliaSim 環境中，print 函數可以輸出一些模擬場景中的資訊，如 模型對象的名稱、坐標位置 等。這些資訊可以幫助您調試和測試您的模擬場景。 \n sim.getObject 是甚麼意思? sim.getObject 是 CoppeliaSim 中的一個函數，用於 獲取場景中的對象句柄 （handle）。在 CoppeliaSim 中，幾乎所有的對象，如模型、傳感器、動作等都可以被看作一個對象，每個對象都有一個唯一的句柄。 \n 通過調用  sim.getObject 函數並傳遞該對象的名稱 ，可以獲取該對象的句柄。獲取對象句柄後，您就可以使用其他的  API 函數來操作該對象 ，例如改變對象的位置和方向、獲取對象的信息等等。 \n 例如，下面的程式碼使用 sim.getObject 函數獲取場景中名為 "Pioneer_p3dx" 的機器人對象，並將其句柄存儲在變量 robotHandle 中。 \n \n \n \n \n \n \n 程式碼中使用了 sim.getObject 函數，這是 V-REP 中的一個函數，用於獲取場景中的物件。具體來說，變數 sensor1 和 sensor2 分別被賦值為場景中名稱為 door1 和 door2 的物件。bubbleRobBase 和 ball 變數分別被賦值為 34 和 16，這表示場景中分別有兩個物件的編號為 34 和 16。 \n 接下來，程式碼使用 sim.getObjectPosition 函數和 sim.getObjectOrientation 函數分別獲取了 bubbleRobBase、ball 和名稱為 23 的物件的位置和方向。這些位置和方向的值將被用作後續程式的參考，例如將 bubbleRobBase 和 ball 移回它們的初始位置。 \n 最後，程式碼使用 print 函數將 bubbleRobBase 和 ball 的值輸出到控制台，以供使用者查看和調試。 \n 記分板 \n "do some initialization here"  是一個程式設計的術語，指的是在程式開始執行之前，需要進行一些初始化的動作，例如設定變數的初值、載入資料庫、建立物件等等。這樣可以確保程式在執行時能夠順利運作，因為有些變數或資源需要預先被設定或載入，才能夠正確地被程式所使用。在程式開發中，初始化是非常重要的一個步驟，能夠確保程式的正確性、可靠性和穩定性。 \n \n 這段程式碼是一個 Lua 腳本，在機器人仿真軟體 V-REP 中執行，它的功能是創建一個介面(UI)，並在介面中加入三個 label 元件，顯示計時器和分數。 \n 具體來說，程式碼中的 count 變數被賦值為 4500，這表示計時器初始值為 30 分鐘（因為 4500 秒等於 30 分鐘）。score1 和 score2 變數被賦值為 0，這是為了儲存兩隊的分數。 \n 接下來，定義了一個包含三個 label 元件的 xml 字串，每個 label 元件都有不同的樣式（style）和 id 屬性。這些 label 元件分別用來顯示計時器、第一隊的分數和第二隊的分數。 \n 最後，通過 simUI.create 函數創建了一個新的介面(ui)，並將 xml 字串作為參數傳遞給這個函數。接著，使用 simUI.setPosition 函數將介面(ui)移動到畫面左上角（座標為 (0, 0)），並設置第三個參數為 true，表示移動後介面(ui)保持可見。 \n \n 這段程式碼是一個在V-REP模擬器中執行的函式，稱為"sysCall_actuation"。當模擬器啟動並運行該函式時，它會檢查"door1"和"door2"附近的距離感測器是否偵測到物體。如果偵測到，它會暫停模擬器運行，並將"bubbleRobBase"和"ball"移回它們的初始位置，以及將計數器"count"減少1，並更新UI中的分數和時間。當計數器達到0時，模擬器將停止運行。 \n \n 1 /downloads/play.py \n', 'tags': '', 'url': 'ag7.html'}, {'title': 'ag10', 'text': '3/30 已完成場地及感測器 \n \n 4/14 完成記分板程式 \n \n 4/14 可進行計分 \n 觸碰到感測器球及機器人會重置到原本的位置 \n \n 在錄影時記分板不會顯示出來-附上圖片 \n \n 當分數為5分時，會暫停模擬 \n \n 在製作感測器時求記得把 collidable、measurable、detectable 這三個選項打開 \n \n 另外要注意的是感測器 z軸的部分不能為0，否則感測器會直接偵測到地板導致程式暫停模擬 \n 記分板程式註解 \n function sysCall_init()\n    score1 = 0 -- 初始化一個名為score1的變數，值為0\n    \n    sensor = sim.getObject(\'./sensor\') -- 從模擬場景中獲取一個名為sensor的物體\n    \n    -- 創建一個UI，包括標題、計分標籤和當前分數值標籤，使用plastique風格\n    xml = [[\n        <ui title="Scoreboard" closeable="false" resizable="false" style="plastique">\n        <label text="Score:" style="* {background-color: #808080; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px; }" id="10"/>\n        <label text="0" style="* {background-color: #FFF; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px;}" id="30"/>\n     \n        </ui>\n    ]]\n    ui = simUI.create(xml) -- 創建UI\n    simUI.setPosition(ui, 0,0, true) -- 將UI定位在屏幕左上角\n    bubbleRob = sim.getObject(\'/bubbleRob\') -- 從模擬場景中獲取名為bubbleRob的物體句柄\n    ball = sim.getObject(\'/ball\') -- 從模擬場景中獲取名為ball的物體句柄\n    bubbleRob2 = sim.getObject(\'/bubbleRob2\') -- 從模擬場景中獲取名為bubbleRob2的物體句柄\n    initialPosition = sim.getObjectPosition(bubbleRob, -1) -- 獲取bubbleRob物體的初始位置\n    initialOrientation = sim.getObjectOrientation(bubbleRob, -1) -- 獲取bubbleRob物體的初始方向\n    initialPosition2 = sim.getObjectPosition(bubbleRob2, -1) -- 獲取bubbleRob2物體的初始位置\n    initialOrientation2 = sim.getObjectOrientation(bubbleRob2, -1) -- 獲取bubbleRob2物體的初始方向\n    initialballPosition = sim.getObjectPosition(ball, -1) -- 獲取ball物體的初始位置\n    initialballOrientation = sim.getObjectOrientation(ball, -1) -- 獲取ball物體的初始方向\n\nend\n\nfunction sysCall_actuation()\n    --simUI.setLabelText(ui, 30, tostring(sim.getFloatSignal("myVariable")))\n\n    -- 讀取接近傳感器的距離值，將其存儲在result變數中\n    result=sim.readProximitySensor(sensor)\n\n    -- 如果分數小於5，則執行以下操作\n    if(score1<5)then\n\n        -- 如果檢測到接近物體，則執行以下操作\n        if(result>0)then\n            -- 將score1變數增加1\n            score2 = score1+1\n\n            -- 在UI中更新分數值標籤的文本為score2\n            simUI.setLabelText(ui, 30, tostring(score2))\n\n            -- 重置bubbleRob、bubbleRob2和ball物體的位置和方向\n            sim.setObjectPosition(bubbleRob, -1, initialPosition)\n            sim.setObjectOrientation(bubbleRob, -1, initialOrientation)\n            sim.setObjectPosition(bubbleRob2, -1, initialPosition2)\n            sim.setObjectOrientation(bubbleRob2, -1, initialOrientation2)\n            sim.setObjectPosition(ball, -1, initialballPosition)\n            sim.setObjectOrientation(ball, -1, initialballOrientation)\n\n            -- 將score1設置為score2\n            score1=score2\n        end\n    else\n        -- 如果分數達到5，則暫停模擬\n        sim.pauseSimulation()\n    end\nend \n 倒數計時器程式註解 \n -- 初始化函數，初始化得分(score1)為0和計時器(count)為3600\nfunction sysCall_init()\n    -- initialize the score to 0\n    score1 = 0 -- 初始化得分\n    count = 3600 -- 初始化計時器\n    -- 獲取接近傳感器對象並創建UI界面\n    sensor = sim.getObject(\'./sensor\')\n    xml = [[\n            <ui title="Scoreboard" closeable="false" resizable="false" style="plastique">\n              <label text="60:00.0" style="* {background-color: #F00; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="10"/>\n              <label text="Score:" style="* {background-color: #808080; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px; }" id="20"/>\n              <label text="0" style="* {background-color: #FFF; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px;}" id="30"/>\n            </ui>\n          ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0, 0, true)\n    -- 獲取對象及其初始位置/方向\n    bubbleRob = sim.getObject(\'/bubbleRob\')\n    ball = sim.getObject(\'/ball\')\n    initialPosition = sim.getObjectPosition(bubbleRob, -1)\n    initialOrientation = sim.getObjectOrientation(bubbleRob, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n    \nend\n\nfunction sysCall_actuation() -- 讀取接近傳感器值\n    result=sim.readProximitySensor(sensor)\n    -- 檢查得分是否小於5\n    if(score1<5)then\n        -- 檢查接近傳感器是否檢測到某物\n        if(result>0)then\n            -- 增加得分並更新UI標籤\n            score2 = score1+1\n            simUI.setLabelText(ui, 30, tostring(score2))\n            -- 重置對象的位置和方向\n            sim.setObjectPosition(bubbleRob, -1, initialPosition)\n            sim.setObjectOrientation(bubbleRob, -1, initialOrientation)\n            sim.setObjectPosition(ball, -1, initialballPosition)\n            sim.setObjectOrientation(ball, -1, initialballOrientation)\n            -- 更新得分變量\n            score1=score2\n        end\n    end\n    if count > 0 then -- 檢查計時器是否大於0\n          count = count - 1 -- 減少倒數時間\n          local minutes = math.floor(count / 60) -- 計算分鐘\n          local seconds = count % 60 -- 計算秒數\n          local timeStr = string.format("%d:%02d", minutes , seconds) -- 格式化時間字符串\n          simUI.setLabelText(ui, 10, timeStr) -- 更新時間UI標籤\n          simUI.setLabelText(ui, 30, tostring(score1)) -- 更新score的UI標籤\n    else\n        -- 如果時間到會暫停模擬\n        sim.pauseSimulation()\n    end\nend \n 可以將倒數計時器顯示出來，但計時器所減少的時間會比正常時間快好幾倍 \n \n bubbleRob_football 檔案 :  bubbleRob_football_pj1ag10 \n 加入連線對戰 bubbleRob_football 檔案 :  bubbleRob_football-2_pj1ag10 \n \n 連線remoteAPI程式註解 \n # 引入必要的模块\nfrom zmqRemoteApi import RemoteAPIClient\nimport keyboard\nimport sim\nimport time\nimport simConst\n\n# 打印程式啟動的訊息\nprint(\'Program started\')\n\n# 關閉所有已開啟的連線\nsim.simxFinish(-1)\n\n# 連接到遠端 API 伺服器\nclientID = sim.simxStart(\'192.168.56.1\', 19998, True, True, 5000, 5)\n\n# 啟動仿真\nsim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)\n\n# 判斷是否成功連線到伺服器\nif clientID != -1:\n    print(\'Connected to remote API server\')\nelse:\n    print(\'Failed connecting to remote API server\')\n\n# 打印仿真開始的訊息\nprint(\'Simulation started\')\n\n# 取得左右輪子的控制句柄\nerrorCode, leftMotor = sim.simxGetObjectHandle(clientID, \'leftMotor2\', sim.simx_opmode_oneshot_wait)\nerrorCode, rightMotor = sim.simxGetObjectHandle(clientID, \'rightMotor2\', sim.simx_opmode_oneshot_wait)\n\n# 設定 BubbleRob 的速度\ndef setBubbleRobVelocity(leftWheelVelocity, rightWheelVelocity):\n    # 取得左右輪子的控制句柄\n    errorCode, leftMotor = sim.simxGetObjectHandle(clientID, \'/leftMotor2\', sim.simx_opmode_oneshot_wait)\n    errorCode, rightMotor = sim.simxGetObjectHandle(clientID, \'/rightMotor2\',sim.simx_opmode_oneshot_wait)\n    # 設定左右輪子的目標速度\n    sim.simxSetJointTargetVelocity(clientID, leftMotor, leftWheelVelocity, simConst.simx_opmode_streaming)\n    sim.simxSetJointTargetVelocity(clientID, rightMotor, rightWheelVelocity, simConst.simx_opmode_streaming)\n\n# 循環檢測鍵盤事件\nwhile True:\n    if keyboard.is_pressed(\'up\'):\n        # 按下"上"鍵，前進\n        setBubbleRobVelocity(2.0, 2.0)\n    elif keyboard.is_pressed(\'down\'):\n        # 按下"下"鍵，後退\n        setBubbleRobVelocity(-2.0, -2.0)\n    elif keyboard.is_pressed(\'left\'):\n        # 按下"左"鍵，左轉\n        setBubbleRobVelocity(-2.0, 2.0)\n    elif keyboard.is_pressed(\'right\'):\n        # 按下"右"鍵，右轉\n        setBubbleRobVelocity(2.0, -2.0)\n    elif keyboard.is_pressed(\'q\'):\n        # 按下"q"鍵，停止仿真\n        sim.stopSimulation()\n    else:\n        # 沒有按下任何鍵，停止移動\n        setBubbleRobVelocity(0.0, 0.0) \n 所有檔案壓縮檔： bubbleRob football 2a-pj1ag10.7z \n 製作心得： \n 製作bubbleRobTutorial時遇到不少問題，如:軸在裝配時選轉方向設置顛倒，導致bubbleRobTutorial 模擬後變成倒著跑，也有遇到只會在原地轉的，還有名稱大小寫打錯導致程式無法運行，但後來都有順利解決。因為參考資料是英文，所以在製作過程中遇到英文單字看不懂或無法理解他的意思，需要上網參考資料才能理解。在製作記分板時詢問了同學才知道他是利用xml創建UI界面將計分板顯示出來，並且利用了Lua函數中的回調函數，該函數中，可以讀取和設置模型的狀態，而計時器也是一樣利用UI界面，並且在回函樹中設置時間到會停止模擬，也學習到了CoppeliaSim的remoteApi實際運作的流程。 \n \n', 'tags': '', 'url': 'ag10.html'}, {'title': 'ag12', 'text': '2a-pj1ag2組員:41023114 王樟皓 41023126 卓桓琮 \n github倉儲 : \xa0 https://github.com/mdecad2022/site-41023126.git \n 個人網站 : https://mdecad2022.github.io/site-41023126/content/index.html \n Process\xa0 \n Step1 :建立足球場景，透過onshape繪出足球的場景，足球分成兩部分第一部分為足球的牆壁第二部分為球門。足球的牆壁: wall \xa0球門: door \n Step2 :轉成STL檔匯入coppaliasim場景中，放入先前製作的bobbleRob robot，並複製兩個在場景中，加入球體 過程: https://youtu.be/Rc-BSnYI17w \n \n Step3 :設定coppliasim中的參數 \n 1.在兩個球門上加入感應sensor，以感測是否進球，將兩個seonsor拉到球門底下 \n \n 2.設定ball的參數 \n \n  接下來將 mp4 檔案從 downloads 目錄取出  \n \n \n 3.bubbleRob robot 參數設定: bubbleRob \n Step4 :加入sensor程式碼-利用chatgpt 寫出程式碼-計時器(記分板-參考至ag2) \n 文字檔: sensor-program \n \n \n function sysCall_init()\n    score1 = 0\n    remaining_time = 60 -- 1 minute\n    sensor = sim.getObject(\'./sensor\')\n    xml = [[                                                             ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\n    bubbleRob1 = sim.getObject(\'/bubbleRob1\')\n    ball = sim.getObject(\'/ball\')\n    bubbleRob2 = sim.getObject(\'/bubbleRob2\')\n    initialPosition = sim.getObjectPosition(bubbleRob1, -1)\n    initialOrientation = sim.getObjectOrientation(bubbleRob1, -1)\n    initialPosition2 = sim.getObjectPosition(bubbleRob2, -1)\n    initialOrientation2 = sim.getObjectOrientation(bubbleRob2, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\nend\n\nfunction sysCall_actuation()\n    -- read the proximity sensor value\n    result=sim.readProximitySensor(sensor)\n    -- check if the remaining time is greater than 0\n    if(remaining_time > 0) then\n        -- check if the proximity sensor detects something\n        if(result>0) then\n            -- increase the score and update the UI label\n            score2 = score1+1\n            simUI.setLabelText(ui, 30, tostring(score2))\n            -- reset the objects\' positions and orientations\n            sim.setObjectPosition(bubbleRob1, -1, initialPosition)\n            sim.setObjectOrientation(bubbleRob1, -1, initialOrientation)\n            sim.setObjectPosition(bubbleRob2, -1, initialPosition2)\n            sim.setObjectOrientation(bubbleRob2, -1, initialOrientation2)\n            sim.setObjectPosition(ball, -1, initialballPosition)\n            sim.setObjectOrientation(ball, -1, initialballOrientation)\n            -- update the score variable\n            score1=score2\n        end\n        -- update the remaining time and the UI label\n        remaining_time = remaining_time - sim.getSimulationTimeStep()\n        simUI.setLabelText(ui, 40, "Time left: "..math.floor(remaining_time).."s")\n    else\n        sim.stopSimulation()\n    end\nend \n Step5 :打開小白窗 加入程式碼 按go \n 文字檔: whitewindow \n # pip install pyzmq cbor\nfrom zmqRemoteApi import RemoteAPIClient\nimport keyboard\n\nclient = RemoteAPIClient(\'localhost\', 23000)\n\nprint(\'Program started\')\nsim = client.getObject(\'sim\')\nsim.startSimulation()\nprint(\'Simulation started\')\n\ndef setBubbleRobVelocity(leftWheelVelocity, rightWheelVelocity):\n    leftMotor = sim.getObject(\'/leftMotor\')\n    rightMotor = sim.getObject(\'/rightMotor\')\n    sim.setJointTargetVelocity(leftMotor, leftWheelVelocity)\n    sim.setJointTargetVelocity(rightMotor, rightWheelVelocity)\n\n\'\'\'\n# Example usage 1:\nsetBubbleRobVelocity(1.0, 1.0)\ntime.sleep(2)\nsetBubbleRobVelocity(0.0, 0.0)\n\'\'\'\n# use keyborad to move BubbleRob\n\nwhile True:\n    if keyboard.is_pressed(\'up\'):\n        setBubbleRobVelocity(1.0, 1.0)\n    elif keyboard.is_pressed(\'down\'):\n        setBubbleRobVelocity(-1.0, -1.0)\n    elif keyboard.is_pressed(\'left\'):\n        setBubbleRobVelocity(-1.0, 1.0)\n    elif keyboard.is_pressed(\'right\'):\n        setBubbleRobVelocity(1.0, -1.0)\n    elif keyboard.is_pressed(\'q\'):\n        # stop simulation\n        sim.stopSimulation()\n    else:\n        setBubbleRobVelocity(0.0, 0.0) \n 在football的場景加入計時器和記分板 過程: https://youtu.be/EZ_mE9P4j-s \n \n \n Step6 :連線對戰 \n 1.查詢ipconfig 找到ipv4埠號\xa0 \n \n 2.將192.168.0.4 複製到小白窗的程式中 \n # pip install pyzmq cbor\nfrom zmqRemoteApi import RemoteAPIClient\nimport keyboard\n\nclient = RemoteAPIClient(\'192.168.0.4\', 23000)\n\nprint(\'Program started\')\nsim = client.getObject(\'sim\')\nsim.startSimulation()\nprint(\'Simulation started\')\n\ndef setBubbleRobVelocity(leftWheelVelocity, rightWheelVelocity):\n    leftMotor = sim.getObject(\'/leftMotor\')\n    rightMotor = sim.getObject(\'/rightMotor\')\n    sim.setJointTargetVelocity(leftMotor, leftWheelVelocity)\n    sim.setJointTargetVelocity(rightMotor, rightWheelVelocity)\n\n\'\'\'\n# Example usage 1:\nsetBubbleRobVelocity(1.0, 1.0)\ntime.sleep(2)\nsetBubbleRobVelocity(0.0, 0.0)\n\'\'\'\n# use keyborad to move BubbleRob\n\nwhile True:\n    if keyboard.is_pressed(\'up\'):\n        setBubbleRobVelocity(1.0, 1.0)\n    elif keyboard.is_pressed(\'down\'):\n        setBubbleRobVelocity(-1.0, -1.0)\n    elif keyboard.is_pressed(\'left\'):\n        setBubbleRobVelocity(-1.0, 1.0)\n    elif keyboard.is_pressed(\'right\'):\n        setBubbleRobVelocity(1.0, -1.0)\n    elif keyboard.is_pressed(\'q\'):\n        # stop simulation\n        sim.stopSimulation()\n    else:\n        setBubbleRobVelocity(0.0, 0.0) \n 3.開始兩人對戰', 'tags': '', 'url': 'ag12.html'}]};