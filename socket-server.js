const WebSocket = require('ws');
const { exec } = require('child_process');
const fs = require('fs');


//  npx playwright codegen baidu.com

const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', (ws) => {
    console.log('客户端连接');
    ws.on('message', (message) => {
        console.log(`从客户端接收数据: ${message}`);
        try {
            // 执行来自客户端的脚本
            // const result = eval(message);
            const fileName = 'test.js'; // 定义文件名
            fs.writeFileSync(fileName, message); // 将收到的消息保存为文件
            exec(`node ${fileName}`, (error, stdout, stderr) => {
                if (error) {
                    console.error('执行脚本时出错:', error);
                    return;
                }
                console.log('执行结果:', stdout);
            });
            ws.send('服务端脚本执行完成');
        } catch (error) {
            console.error('执行脚本时出错:', error);
        }
    });
    ws.on('close', () => {
        console.log('客户端断开连接');
    });
    ws.on('error', (err) => {
        console.error('WebSocket Error:', err);
    });
    // ws.send('欢迎来到服务器');
    ws.send('服务器发送信息');
});
console.log('WebSocket 服务器已启动');
