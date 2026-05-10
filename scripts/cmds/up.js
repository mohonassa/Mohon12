<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Dashboard</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: #0f0c29;
            background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
            font-family: 'Poppins', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .dashboard {
            width: 100%;
            max-width: 800px;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 24px;
            padding: 35px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .title {
            text-align: center;
            margin-bottom: 35px;
        }
        
        .title h1 {
            color: #fff;
            font-size: 32px;
            font-weight: 700;
            background: linear-gradient(90deg, #a770ef, #cf8bf3, #fdb99b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            letter-spacing: 2px;
        }
        
        .title p {
            color: rgba(255, 255, 255, 0.6);
            font-size: 13px;
            margin-top: 5px;
        }
        
        .main-stats {
            display: flex;
            justify-content: space-around;
            margin-bottom: 30px;
            gap: 20px;
        }
        
        .gauge {
            text-align: center;
            position: relative;
        }
        
        .gauge-circle {
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background: conic-gradient(#a770ef 0deg, #cf8bf3 var(--percent), rgba(255,255,255,0.1) var(--percent));
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        
        .gauge-circle::before {
            content: '';
            position: absolute;
            width: 115px;
            height: 115px;
            background: #1a1630;
            border-radius: 50%;
        }
        
        .gauge-text {
            position: relative;
            z-index: 1;
        }
        
        .gauge-value {
            color: #fff;
            font-size: 28px;
            font-weight: 700;
        }
        
        .gauge-label {
            color: rgba(255, 255, 255, 0.7);
            font-size: 11px;
            margin-top: 3px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }
        
        .info-box {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            padding: 18px 15px;
            text-align: center;
            transition: 0.3s;
        }
        
        .info-box:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-3px);
            box-shadow: 0 5px 20px rgba(167, 112, 239, 0.3);
        }
        
        .info-icon {
            font-size: 24px;
            margin-bottom: 8px;
        }
        
        .info-value {
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 3px;
        }
        
        .info-label {
            color: rgba(255, 255, 255, 0.5);
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-text {
            color: rgba(255, 255, 255, 0.4);
            font-size: 11px;
        }
        
        .badge {
            background: linear-gradient(90deg, #a770ef, #cf8bf3);
            padding: 6px 14px;
            border-radius: 20px;
            color: #fff;
            font-size: 11px;
            font-weight: 600;
        }
        
        @media (max-width: 700px) {
            .main-stats { flex-direction: column; align-items: center; }
            .info-grid { grid-template-columns: repeat(2, 1fr); }
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <div class="title">
            <h1>SYSTEM DASHBOARD</h1>
            <p>Node.js Server Monitor v3.0</p>
        </div>
        
        <div class="main-stats">
            <div class="gauge">
                <div class="gauge-circle" style="--percent: 87deg;">
                    <div class="gauge-text">
                        <div class="gauge-value">24.2%</div>
                        <div class="gauge-label">CPU Load</div>
                    </div>
                </div>
            </div>
            
            <div class="gauge">
                <div class="gauge-circle" style="--percent: 201deg;">
                    <div class="gauge-text">
                        <div class="gauge-value">55.9%</div>
                        <div class="gauge-label">RAM Load</div>
                    </div>
                </div>
            </div>
            
            <div class="gauge">
                <div class="gauge-circle" style="--percent: 236deg;">
                    <div class="gauge-text">
                        <div class="gauge-value">65.6%</div>
                        <div class="gauge-label">Disk Load</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="info-grid">
            <div class="info-box">
                <div class="info-icon">⚡</div>
                <div class="info-value">0d 0h 59m</div>
                <div class="info-label">Bot Uptime</div>
            </div>
            
            <div class="info-box">
                <div class="info-icon">🖥️</div>
                <div class="info-value">0d 20h 40m</div>
                <div class="info-label">Sys Uptime</div>
            </div>
            
            <div class="info-box">
                <div class="info-icon">💾</div>
                <div class="info-value">7.8 GB</div>
                <div class="info-label">Total RAM</div>
            </div>
            
            <div class="info-box">
                <div class="info-icon">🔥</div>
                <div class="info-value">12 Cores</div>
                <div class="info-label">CPU</div>
            </div>
        </div>
        
        <div class="footer">
            <span class="footer-text">[ 2026-05-10 | 20:50:02 ] | Intel Xeon Processor</span>
            <span class="badge">NODE.JS v20.20.2</span>
        </div>
    </div>
    
    <script>
        // পার্সেন্টেজ থেকে ডিগ্রি কনভার্ট: percent * 3.6 = degree
        // যেমন 24.2% = 24.2 * 3.6 = 87deg
    </script>
</body>
</html>
