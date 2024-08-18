import asyncio
import time

import websockets


async def start_client():
    uri = "ws://api-int.dreammaker-test.netease.com/ws?user=luocanxin"
    async with websockets.connect(uri) as websocket:
        read_task = asyncio.create_task(read(websocket))
        write_task = asyncio.create_task(write(websocket))
        await asyncio.gather(read_task, write_task)


async def read(websocket):
    while True:
        response = await websocket.recv()
        print(f"Received from Server: {response}")


async def write(websocket):
    while True:
        message = f"Message {111}"
        await websocket.send(message)
        print(f"Sent to server: {message}")
        time.sleep(2)



# 启动事件循环
asyncio.get_event_loop().run_until_complete(start_client())