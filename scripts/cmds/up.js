<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Panel</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: #0a0a0f;
            font-family: 'Rajdhani', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .panel {
            background: #0d0d14;
            border-radius: 20px;
            padding: 40px 30px 30px;
            width: 100%;
            max-width: 650px;
            position: relative;
            box-shadow: 0 0 40px rgba(0, 255, 255, 0.1);
            background-image: 
                linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 20px 20px;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            align-items: center;
            justify-items: center;
            position: relative;
        }
        
        .circle {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 2px solid #00f0ff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 15px rgba(0, 240, 255, 0.5), inset 0 0 15px rgba(0, 240, 255, 0.1);
            position: relative;
        }
        
        .circle.pink {
            border: 2px solid #ff00ff;
            box-shadow: 0 0 15px rgba(255, 0, 255, 0.5), inset 0 0 15px rgba(255, 0, 255, 0.1);
            width: 140px;
            height: 140px;
        }
        
        .circle .value {
            color: #fff;
            font-size: 22px;
            font-weight: 700;
            text-shadow: 0 0 10px currentColor;
        }
        
        .circle .label {
            color: #7a7a8c;
            font-size: 11px;
            font-weight: 600;
            margin-top: 2px;
            text-transform: uppercase;
        }
        
        .center {
            grid-column: 2;
            grid-row: 2;
        }
        
        .info-box {
            position: absolute;
            border: 1px solid #00f0ff;
            background: rgba(0, 240, 255, 0.05);
            padding: 6px 12px;
            font-size: 10px;
            box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
        }
        
        .info-box.pink {
            border: 1px solid #ff00ff;
            background: rgba(255, 0, 255, 0.05);
            box-shadow: 0 0 10px rgba(255, 0, 255, 0.3);
        }
        
        .info-box .title {
            color: #7a7a8c;
            font-size: 9px;
            text-transform: uppercase;
        }
        
        .info-box .data {
            color: #fff;
            font-weight: 600;
            font-size: 12px;
        }
        
        .top-left { top: -10px; left: -20px; }
        .top-right { top: -10px; right: -20px; }
        .bottom-left { bottom: -10px; left: -20px; }
        .bottom-right { bottom: -10px; right: -20px; }
        
        .footer {
            text-align: center;
            color: #00f0ff;
            font-size: 11px;
            margin-top: 25px;
            opacity: 0.6;
        }
    </style>
</head>
<body>
    <div class="panel">
        <div class="info-box pink top-left">
            <div class="title">TOTAL RAM</div>
            <div class="data">7.8 GB</div>
        </div>
        
        <div class="info-box top-right">
            <div class="title">CPU MODEL</div>
            <div class="data">Intel Xeon Proc</div>
        </div>
        
        <div class="grid">
            <div class="circle">
                <div class="value">0d 0h 59m</div>
                <div class="label">BOT UPTIME</div>
            </div>
            
            <div class="circle">
                <div class="value">65.6%</div>
                <div class="label">DISK LOAD</div>
            </div>
            
            <div class="circle">
                <div class="value">0d 20h 40m</div>
                <div class="label">SYS UPTIME</div>
            </div>
            
            <div class="circle pink center">
                <div class="value">SYSTEM</div>
                <div class="label">PANEL</div>
            </div>
            
            <div class="circle">
                <div class="value">12</div>
                <div class="label">CPU CORES</div>
            </div>
            
            <div class="circle">
                <div class="value">55.9%</div>
                <div class="label">RAM LOAD</div>
            </div>
            
            <div class="circle">
                <div class="value">24.2%</div>
                <div class="label">CPU LOAD</div>
            </div>
        </div>
        
        <div class="info-box bottom-left">
            <div class="title">PLATFORM</div>
            <div class="data">NODE.JS</div>
        </div>
        
        <div class="info-box pink bottom-right">
            <div class="title">NODE.JS</div>
            <div class="data">v20.20.2</div>
        </div>
        
        <div class="footer">[ 2026-05-10 | 20:50:02 ] | System Info Panel v2.0</div>
    </div>
</body>
</html>
