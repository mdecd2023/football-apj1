var tipuesearch = {"pages": [{'title': 'About', 'text': '網站:\xa0 https://mdecd2023.github.io/football-apj1 \xa0 \n 倉儲: \xa0 https://github.com/mdecd2023/football-apj1 \n 討論區:\xa0 https://github.com/mdecd2023/football-apj1/discussions \n', 'tags': '', 'url': 'About.html'}, {'title': '足球場景', 'text': 'bubbleRob1 與 bubbleRob2 分別透過 19997 與 19998 埠號交由雙方的 Python remoteAPI 進行控制 \n 場景串流埠號: 23020 \n 假設: 19997 與 bubbleRob1 的控制在一台 Windows 10 電腦上, 而 19998 則交由另外一台電腦控制. \n', 'tags': '', 'url': '足球場景.html'}, {'title': '評分', 'text': '2a w6-2 Python remoteAPI 連線查驗結果.txt \n 2a 學號與 Githbu 帳號對應名單 \n 還需要設法取得各組組員名單, 然後再換成學號 \n 請各組在 pj1 分組網頁中, 以 w6 (H2) 作為頁面標題, 直接在頁面中, 列出完成連線的分組與未完成連線的分組組員學號.\xa0 \n 預計採用 Brython 讀取上面兩個連結資料後, 再逐一利用迴圈進行比對 \n  建立 Brython 環境  \n \n \n \n \n \n \n', 'tags': '', 'url': '評分.html'}, {'title': 'pj1', 'text': '', 'tags': '', 'url': 'pj1.html'}, {'title': 'ag2', 'text': '2a-pj1ag2組員:41023146洪偉陞、41023148夏進源 \n pj1倉儲: https://github.com/mdecd2023/2a-pj1ag2 \n pj1網頁: https://mdecd2023.github.io/2a-pj1ag2/content/index.html \n bubbleRob足球遊戲 \n 1.先繪製球框( ball frame.7z ) \n \n 2.使用鍵盤控制 bubbleRob \n \n function sysCall_init()  \n    right_wheel= sim.getObjectHandle(\'joint1\') \n    left_wheel= sim.getObjectHandle(\'joint2\') \n    right_velocity=0 \n    left_velocity=0\n    speed=5\n    sim.setJointTargetVelocity(right_wheel,0)\n    sim.setJointTargetVelocity(left_wheel,0)\n \nend\n  \nfunction sysCall_actuation()  \n    message,auxiliaryData=sim.getSimulatorMessage() \n    while message~=-1 do\n        if (message==sim.message_keypress) then\n            \n            if (auxiliaryData[1]==32) then\n\n                right_velocity=0 \n                left_velocity=0 \n                sim.setJointMaxForce(right_wheel, 0) \n                sim.setJointMaxForce(left_wheel, 0) \n                break\n            else\n                sim.setJointMaxForce(right_wheel, 10) \n                sim.setJointMaxForce(left_wheel, 10)\n            \n            \n                if (auxiliaryData[1]==2007) then -- up key\n                    \n                    sim.setJointTargetVelocity(right_wheel,speed)\n                    sim.setJointTargetVelocity(left_wheel,speed)\n                end\n                if (auxiliaryData[1]==2008) then -- down key\n                    \n                    sim.setJointTargetVelocity(right_wheel,-speed/2)\n                    sim.setJointTargetVelocity(left_wheel,-speed/2)\n                    \n                end\n                if (auxiliaryData[1]==2009) then -- left key\n                    sim.setJointTargetVelocity(right_wheel,speed)\n                    sim.setJointTargetVelocity(left_wheel,speed/2)\n                   \n                end\n                if (auxiliaryData[1]==2010) then -- right key\n                    sim.setJointTargetVelocity(right_wheel,speed/2)\n                    sim.setJointTargetVelocity(left_wheel,speed)\n                    \n                end\n\n            end\n        end\n        message,auxiliaryData=sim.getSimulatorMessage()\n    end\nend \n \n 3.加入球框感測器和記分板( newbubbleRob.ttt ) \n \n 感測器lua腳本 \n function sysCall_init()\n    score1 = 0\n    \n    sensor = sim.getObject(\'./sensor\')\n    xml = [[\n        <ui title="Scoreboard" closeable="false" resizable="false" style="plastique">\n        <label text="Score:" style="* {background-color: #808080; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px; }" id="10"/>\n        <label text="0" style="* {background-color: #FFF; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px;}" id="30"/>\n     \n        </ui>\n    ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\n    bubbleRob = sim.getObject(\'/bubbleRob\')\n    ball = sim.getObject(\'/ball\')\n    bubbleRob2 = sim.getObject(\'/bubbleRob2\')\n    initialPosition = sim.getObjectPosition(bubbleRob, -1)\n    initialOrientation = sim.getObjectOrientation(bubbleRob, -1)\n    initialPosition2 = sim.getObjectPosition(bubbleRob2, -1)\n    initialOrientation2 = sim.getObjectOrientation(bubbleRob2, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n\nend\n\n\nfunction sysCall_actuation()\n    --simUI.setLabelText(ui, 30, tostring(sim.getFloatSignal("myVariable")))\n    result=sim.readProximitySensor(sensor)\n    if(score1<5)then\n        if(result>0)then\n            score2 = score1+1\n            simUI.setLabelText(ui, 30, tostring(score2))\n\n            sim.setObjectPosition(bubbleRob, -1, initialPosition)\n            sim.setObjectOrientation(bubbleRob, -1, initialOrientation)\n            sim.setObjectPosition(bubbleRob2, -1, initialPosition2)\n            sim.setObjectOrientation(bubbleRob2, -1, initialOrientation2)\n            sim.setObjectPosition(ball, -1, initialballPosition)\n            sim.setObjectOrientation(ball, -1, initialballOrientation)\n            score1=score2\n        end\n    else\n        sim.pauseSimulation()\n    end\nend \n \n 4.改成用遠端api操控bubbleRob前後左右移動( bubbleRob.7z ) \n \n <<<<<<< HEAD \n', 'tags': '', 'url': 'ag2.html'}, {'title': 'ag4', 'text': '2a-pj1ag4組員:41023125、41023128 \n pj1ag4倉儲: https://github.com/mdecd2023/2a-pj1ag4 \n pj1ag4網頁: https://mdecd2023.github.io/2a-pj1ag4 \n \n 歷程 \n 3/24 完成將bubbleRob 雙輪車調整成手動模式 \n 利用awsd鍵進行移動 \n \n 觸發特定條件使 bubbleRob 雙輪車 回到原位 \n \n 3/25 完成足球製作以及 觸發條件設定製作 \n 使球觸碰到球門的感測器後重製球場 \n \n 3/26 增加放開鍵盤會停止、倒數計時、記分板 \n 增加放開鍵盤一段時間後會將速度設為0直到按下鍵盤 \n \n 增加倒數計時與分數的面板 \n 開始後開始倒數計時 \n 時間到則結束 \n \n 兩邊感測與計算皆完成 \n \n 3/29 連線問題解決 \n 將操作的程式轉成python \n 4/12 確認連機遊玩可執行 \n 加入歡迎跟恭喜 \n \n \n \n 共經歷了八個版本改版 \n 前七個版本: bubbleRob紀錄.7z \n 最終版: bubbleRob.7z \n 裡面包含了my_ip.txt ip.bat\xa0\xa0ip.py\xa0bubbleRob2.py\xa0bubbleRob.py\xa0bubbleRob_scenes.ttt等 \n 點擊 ip.bat就能直接獲取到目前電腦的ipv4位置 \n \n \n \xa0加入遊戲所在電腦ip 只需輸入ip ( 遊戲所在電腦ip ) \n \n \n 程式 \n 場景部分將程式將拆成了許多部分 \n 用以方便維修 \n function sysCall_init()\n-- 場景模擬開始時開啟19998與23020埠號\nsimRemoteApi.start(19998)\nsimRemoteApi.start(23020)\nend \n \n function sysCall_init()\n    --紀錄初始位置並在得分時重置位置\n    --倒數計時與計算分數並顯示等\n    sensor = sim.getObject(\'./sensor\')\n    sensor2 = sim.getObject(\'./sensor2\')\n    bubbleRobBase = 197\n    bubbleRobBase2 = 210\n    ball = 206\n    initialBubbleRobPosition = sim.getObjectPosition(bubbleRobBase, -1)\n    initialBubbleRobOrientation = sim.getObjectOrientation(bubbleRobBase, -1)\n    initialballPosition = sim.getObjectPosition(ball, -1)\n    initialballOrientation = sim.getObjectOrientation(ball, -1)\n    initial2Position = sim.getObjectPosition(bubbleRobBase2, -1)\n    initial2Orientation = sim.getObjectOrientation(bubbleRobBase2, -1)\n    -- do some initialization here\n    count = 1800  -- ??30????????????\n    score1 = 0  -- ??????\n    score2 = 0\n    xml = [[\n        <ui closeable="false" resizeable="false" activate="false">\n            <label text="30:00" style="* {background-color: #F00; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="10"/>\n            <label text="0" style="* {background-color: #00F; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="20"/>\n            <label text="0" style="* {background-color: #00F; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="30"/>\n        </ui>\n    ]]\n    ui = simUI.create(xml)\n    simUI.setPosition(ui, 0,0, true)\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(sensor)\n    result2=sim.readProximitySensor(sensor2)\n    --if sim.getSimulationTime() == 0 then\n        --sim.pauseSimulation()\n    --end\n\n    -- 0 or 1\n    if(result>0)then\n        sim.pauseSimulation()\n        sim.setObjectPosition(bubbleRobBase, -1, initialBubbleRobPosition)\n        sim.setObjectOrientation(bubbleRobBase, -1, initialBubbleRobOrientation)\n        sim.setObjectPosition(ball, -1, initialballPosition)\n        sim.setObjectOrientation(ball, -1, initialballOrientation)\n        sim.setObjectPosition(bubbleRobBase2, -1, initial2Position)\n        sim.setObjectOrientation(bubbleRobBase2, -1, initial2Orientation)\n        score1 = score1 +1 \n        \n    end\n    if(result2>0)then\n        sim.pauseSimulation()\n        sim.setObjectPosition(bubbleRobBase, -1, initialBubbleRobPosition)\n        sim.setObjectOrientation(bubbleRobBase, -1, initialBubbleRobOrientation)\n        sim.setObjectPosition(ball, -1, initialballPosition)\n        sim.setObjectOrientation(ball, -1, initialballOrientation)\n        sim.setObjectPosition(bubbleRobBase2, -1, initial2Position)\n        sim.setObjectOrientation(bubbleRobBase2, -1, initial2Orientation)\n        score2 = score2 +1 \n        \n    end\n    if count > 0 then\n        count = count - 1\n        local minutes = math.floor(count / 60)\n        local seconds = count % 60\n        local timeStr = string.format("%d:%02d", minutes, seconds)\n        simUI.setLabelText(ui, 10, timeStr)\n        simUI.setLabelText(ui, 20, tostring(score1))\n        simUI.setLabelText(ui, 30, tostring(score2))\n    else\n        sim.stopSimulation()\n    end\n\nend\n \n function sysCall_init()\n    --開始時暫停模擬並顯示welcome to play\n    --之後顯示congratulations on getting a point\n    xml1 = [[\n        <ui closeable="false" resizeable="false" activate="false">\n            <label text="welcome to play" style="* {background-color: #00F; color: #FFF; font-size: 32px; font-weight: bold; padding: 4px; border-radius: 4px;}" id="1"/>\n        </ui>\n    ]]\n    ui1 = simUI.create(xml1)\n    add = true \n    -- Pause simulation on the first run\n    sim.pauseSimulation(true)\nend\n\nfunction sysCall_actuation()\n    simUI.hide(ui1)\n    \n    \n    \nend\n\nfunction sysCall_suspend()\n    simUI.show(ui1)\n    --simUI.setLabelText(ui1, 1, "good game")\n    if add == false then \n        simUI.setLabelText(ui1, 1, "congratulations on getting a point")\n    end\n    add = false\nend\n \n python操控部分 \n #bubbleRob.py\nimport sim\nimport sys, math\nimport keyboard\nimport time\n\nwith open(\'my_ip.txt\', \'r\') as f:\n    my_ip1 = f.readlines()\n    for line in my_ip1:\n        if \'game\' in line: #game #myip #local\n            ip = line.split(\':\')[1].strip()\n            print(ip)\n\n# 連接到 CoppeliaSim simulation\nsim.simxFinish(-1)\nclientID = sim.simxStart(ip, 19997, True, True, 5000, 5)\nsim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)\n\nif clientID != -1:\n    print("已連線到遠端 CoppeliaSim 伺服器")\nelse:\n    print(\'連線失敗\')\n    sys.exit(\'無法連線到 CoppeliaSim 伺服器\')\n\n# 取得馬達與感測器的 handles\nerrorCode, leftMotor = sim.simxGetObjectHandle(clientID, \'leftMotor\', sim.simx_opmode_oneshot_wait)\nerrorCode, rightMotor = sim.simxGetObjectHandle(clientID, \'rightMotor\', sim.simx_opmode_oneshot_wait)\nerrorCode, sensingNose = sim.simxGetObjectHandle(clientID, \'sensingNose\', sim.simx_opmode_oneshot_wait)\n\n# 設定一些參數\ndeg = math.pi/180\npaused = False\nif errorCode == -1:\n    print(\'找不到左右馬達\')\n    sys.exit()\n\ndef jointspeed(left,right):\n    errorCode4=sim.simxSetJointTargetVelocity(clientID,leftMotor,left, sim.simx_opmode_oneshot)\n    errorCode5=sim.simxSetJointTargetVelocity(clientID,rightMotor,right, sim.simx_opmode_oneshot_wait)\nerrorCode, number2 = sim.simxLoadModel(clientID, \'number2.ttm\', 0, sim.simx_opmode_oneshot_wait)   \nwhile sim.simxGetConnectionId(clientID) != -1:\n    event = keyboard.read_event()\n    if event.event_type == \'down\':\n        print(\'The "\' + event.name + \'" key was pressed.\')\n    if event.name == \'a\' :\n        jointspeed(-3,5)\n    elif event.name == \'w\' :\n        jointspeed(5,5)\n    elif event.name == \'s\' :\n        jointspeed(-5,-5)\n    elif event.name == \'d\' :\n        jointspeed(5,-3)\n    if event.name == \'p\':\n        if not paused:\n            print(\'Paused\')\n            sim.simxPauseSimulation(clientID, sim.simx_opmode_oneshot_wait)\n            paused = True\n            time.sleep(0.1)\n        else:\n            print(\'Resumed\')\n            sim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)\n            paused = False\n            time.sleep(0.1)\n \n #bubbleRob2.py\nimport sim\nimport sys, math\nimport keyboard\nimport time\n\nwith open(\'my_ip.txt\', \'r\') as f:\n    my_ip1 = f.readlines()\n    for line in my_ip1:\n        if \'game\' in line: #game #myip #local\n            ip = line.split(\':\')[1].strip()\n            print(ip)\n\n\n# 連接到 CoppeliaSim simulation\nsim.simxFinish(-1)\nclientID = sim.simxStart(ip, 19998, True, True, 5000, 5)\nsim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)\n\nif clientID != -1:\n    print("已連線到遠端 CoppeliaSim 伺服器")\nelse:\n    print(\'連線失敗\')\n    sys.exit(\'無法連線到 CoppeliaSim 伺服器\')\n\n# 取得馬達與感測器的 handles\nerrorCode, sensingNose = sim.simxGetObjectHandle(clientID, \'sensingNose\', sim.simx_opmode_oneshot_wait)\nerrorCode = 0\nleftMotor = 216\nrightMotor = 214\nprint(errorCode)\n# 設定一些參數\ndeg = math.pi/180\npaused = False\nif errorCode == -1:\n    print(\'找不到左右馬達\')\n    sys.exit()\n\ndef jointspeed(left,right):\n    errorCode4=sim.simxSetJointTargetVelocity(clientID,leftMotor,left, sim.simx_opmode_oneshot)\n    errorCode5=sim.simxSetJointTargetVelocity(clientID,rightMotor,right, sim.simx_opmode_oneshot_wait)\nerrorCode, number2 = sim.simxLoadModel(clientID, \'number2.ttm\', 0, sim.simx_opmode_oneshot_wait)   \nwhile sim.simxGetConnectionId(clientID) != -1:\n    event = keyboard.read_event()\n    if event.event_type == \'down\':\n        print(\'The "\' + event.name + \'" key was pressed.\')\n    if event.name == \'a\' :\n        jointspeed(-3,5)\n    elif event.name == \'w\' :\n        jointspeed(5,5)\n    elif event.name == \'s\' :\n        jointspeed(-5,-5)\n    elif event.name == \'d\' :\n        jointspeed(5,-3)\n    if event.name == \'p\':\n        if not paused:\n            print(\'Paused\')\n            sim.simxPauseSimulation(clientID, sim.simx_opmode_oneshot_wait)\n            paused = True\n            time.sleep(0.1)\n        else:\n            print(\'Resumed\')\n            sim.simxStartSimulation(clientID, sim.simx_opmode_oneshot_wait)\n            paused = False\n            time.sleep(0.1)\n\n \n \n 遊戲說明 \n 開啟場景後便可以使用19997進行連線 \n 如果成功連線便會顯示 \n \n 這時23020與19998埠號便會開啟 \n 第二位玩家便可利用19998加入遊戲 \n 加入成功便會立即開始 \n 玩家可利用wasd進行操控 \n 觀戰者可以利用23020埠號進行觀戰 \n 一方得分後便會暫停遊戲並還原場地 \n 按下p則繼續遊戲 \n 時間到便會結束遊戲 \n \n 缺陷 \n 1.在23020埠號的觀戰者無法查看到分數與時間,只能顯示在場景的主畫面上 \n 2.機器人的機體不適合推球 \n 3.遊戲結束後可以加入哪方勝利字樣 \n 4.計分可以拆分成兩方並標示(藍方紅方等)以便了解比分情況 \n 5.翻車時目前沒有自救空間 \n 可以增加按鍵來達成加機器擺正 \n 6.按鍵指令只能觸發一個 \n 造成動作不夠連貫 \n 希望能做到同時按兩個鍵 \n 將會有更高的操作性 \n 補充 \n sensingNose其實沒有實際用處 \n 不拔除主要原因是可以用來凸顯bubbleRob的移動方向 \n 心得 \n 這次的專案從中學習到了CoppeliaSim的remoteApi實際運作方式 \n 也對CoppeliaSim的lua與python的寫法有更深得了解 \n 對於CoppeliaSim的句柄用法了解透徹能夠靈活運用 \n 不過對於sim.py函式庫的使用依舊有加強空間 \n 許多函式不熟悉只能使用替代方案執行 \n 編寫程式時可以多利用print \n 不管是除錯或者理解暫存的內容都好用 \n lua的寫法與習慣的pyhton略有不同 \n 例如 \n --lua註解 \n #python註解 \n lua程式後面需要加上end表示結束 \n 但不需要像python重視縮排 \n -- lua 的if \n if *條件* then *輸出* elseif *條件2* then *輸出2* else *輸出3* end \n python不需要then 且elif跟lua的elseif寫法不同需要注意 \n -- lua 的whilefunction sysCall_actuation() \n *程式* \n end \n 跟python的while True:類似無限循環執行到結束 \n', 'tags': '', 'url': 'ag4.html'}, {'title': 'ag5', 'text': '組長: 41023121 李承翰 ， 組員：41023134 林建維 \n 網頁 \xa0 https://mdecd2023.github.io/2a-pj1ag5/content/index.html \n 倉儲 \xa0 https://github.com/mdecd2023/2a-pj1ag5 \n bubbleRob足球遊戲 \n \n 球框.stl    球框.prt \n \n \n \n 兩台車車加球框.ttt \n \n \n 計分.ttt \n \n sensor.txt   sensor2.txt   newbing_bubbleRob.rar \n \n 兩台車車對戰影片 \n \n 這學期的課程節奏十分緊湊，我也花了許多的時間在了解程式及原理，雖然現在有AI的協助但是AI必須問得非常精準才能得到我想要的答案，像是程式出錯時的回應他能很精準地回答，但是如果是問他程式的問題時他有時會列出很多種可能，看到其實心很累啊。這次的車車老實說大部分還是由老師所提供也謝謝同學的教導與修正我才能如期完成這項作業。', 'tags': '', 'url': 'ag5.html'}, {'title': 'ag12', 'text': '2a-pj1ag2組員:41023114 王樟皓 41023126 卓桓琮 \n github倉儲 : \xa0 https://github.com/mdecad2022/site-41023126.git \n 個人網站 : https://mdecad2022.github.io/site-41023126/content/index.html \n Process \n Step1 :建立足球場景，透過onshape繪出足球的場景，足球分成兩部分第一部分為足球的牆壁第二部分為球門。足球的牆壁: wall \xa0球門: door \n Step2 :轉成STL檔匯入coppaliasim場景中，放入先前製作的bobbleRob robot，並複製兩個在場景中，加入球體 過程: https://youtu.be/kS8bhxbiVso \n \n Step3 :在兩個球門上加入感應sensor，以感測是否進球，將兩個seonsor拉到球門底下 \n \n Step4 :加入sensor程式碼-利用chatgpt 寫出程式碼(包括記分板及計時器) \n 文字檔: sensor-program \n function sysCall_init() score1 = 0 remaining_time = 60 -- 1 minute sensor = sim.getObject(\'./sensor\') xml = [[ <ui title="Scoreboard" closeable="false" resizable="false" style="plastique"> <label text="Score:" style="* {background-color: #808080; color: #000000; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px; }" id="10"/> <label text="0" style="* {background-color: #1E90FF; color: #FFFFFF; font-size: 40px; font-weight: bold; padding: 5px; border-radius: 5px;}" id="30"/> <label text="Time left: 60s" style="* {background-color: #808080; color: #000000; font-size: 20px; font-weight: bold; padding: 5px; border-radius: 5px; }" id="40"/> </ui> ]] ui = simUI.create(xml) simUI.setPosition(ui, 0,0, true) bubbleRob1 = sim.getObject(\'/bubbleRob1\') ball = sim.getObject(\'/ball\') bubbleRob2 = sim.getObject(\'/bubbleRob2\') initialPosition = sim.getObjectPosition(bubbleRob1, -1) initialOrientation = sim.getObjectOrientation(bubbleRob1, -1) initialPosition2 = sim.getObjectPosition(bubbleRob2, -1) initialOrientation2 = sim.getObjectOrientation(bubbleRob2, -1) initialballPosition = sim.getObjectPosition(ball, -1) initialballOrientation = sim.getObjectOrientation(ball, -1) end \n function sysCall_actuation() -- read the proximity sensor value result=sim.readProximitySensor(sensor) -- check if the remaining time is greater than 0 if(remaining_time > 0) then -- check if the proximity sensor detects something if(result>0) then -- increase the score and update the UI label score2 = score1+1 simUI.setLabelText(ui, 30, tostring(score2)) -- reset the objects\' positions and orientations sim.setObjectPosition(bubbleRob1, -1, initialPosition) sim.setObjectOrientation(bubbleRob1, -1, initialOrientation) sim.setObjectPosition(bubbleRob2, -1, initialPosition2) sim.setObjectOrientation(bubbleRob2, -1, initialOrientation2) sim.setObjectPosition(ball, -1, initialballPosition) sim.setObjectOrientation(ball, -1, initialballOrientation) -- update the score variable score1=score2 end -- update the remaining time and the UI label remaining_time = remaining_time - sim.getSimulationTimeStep() simUI.setLabelText(ui, 40, "Time left: "..math.floor(remaining_time).."s") else sim.stopSimulation() end end \n Step5 :打開小白窗 加入程式碼 按go \n 文字檔: whitewindow \n # pip install pyzmq cbor from zmqRemoteApi import RemoteAPIClient import keyboard \n client = RemoteAPIClient(\'localhost\', 23000) \n print(\'Program started\') sim = client.getObject(\'sim\') sim.startSimulation() print(\'Simulation started\') \n def setBubbleRobVelocity(leftWheelVelocity, rightWheelVelocity): leftMotor = sim.getObject(\'/leftMotor\') rightMotor = sim.getObject(\'/rightMotor\') sim.setJointTargetVelocity(leftMotor, leftWheelVelocity) sim.setJointTargetVelocity(rightMotor, rightWheelVelocity) \n \'\'\' # Example usage 1: setBubbleRobVelocity(1.0, 1.0) time.sleep(2) setBubbleRobVelocity(0.0, 0.0) \'\'\' # use keyborad to move BubbleRob \n while True: if keyboard.is_pressed(\'up\'): setBubbleRobVelocity(1.0, 1.0) elif keyboard.is_pressed(\'down\'): setBubbleRobVelocity(-1.0, -1.0) elif keyboard.is_pressed(\'left\'): setBubbleRobVelocity(-1.0, 1.0) elif keyboard.is_pressed(\'right\'): setBubbleRobVelocity(1.0, -1.0) elif keyboard.is_pressed(\'q\'): # stop simulation sim.stopSimulation() else: setBubbleRobVelocity(0.0, 0.0) \n 在football的場景加入計時器和記分板 過程: https://youtu.be/EZ_mE9P4j-s \n \n \n', 'tags': '', 'url': 'ag12.html'}]};