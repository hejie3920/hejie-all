import random
import curses

s = curses.initscr()
curses.curs_set(0)
sh, sw = s.getmaxyx()
w = curses.newwin(sh, sw, 0, 0)
w.keypad(1)
w.timeout(100)

snk_x = sw//4
snk_y = sh//2
snake = [
    [snk_y, snk_x],
    [snk_y, snk_x-1],
    [snk_y, snk_x-2]
]

foods = [[sh//2, sw//2]]
w.addch(int(foods[0][0]), int(foods[0][1]), curses.ACS_PI)


def create_food():
    while True:
        nf = [
            random.randint(1, sh-1),
            random.randint(1, sw-1)
        ]
        if nf not in snake and nf not in foods:
            return nf


key = curses.KEY_RIGHT

while True:
    next_key = w.getch()
    key = key if next_key == -1 else next_key

    if snake[0][0] in [0, sh] or \
            snake[0][1] in [0, sw] or \
            snake[0] in snake[1:]:
        curses.endwin()
        quit()

    new_head = [snake[0][0], snake[0][1]]

    if key == curses.KEY_DOWN:
        new_head[0] += 1
    if key == curses.KEY_UP:
        new_head[0] -= 1
    if key == curses.KEY_LEFT:
        new_head[1] -= 1
    if key == curses.KEY_RIGHT:
        new_head[1] += 1

    snake.insert(0, new_head)

    ate_food = False
    for food in foods:
        if snake[0] == food:
            ate_food = True
            foods.remove(food)
            while len(foods) < 3:
                nf = create_food()
                foods.append(nf)
                w.addch(nf[0], nf[1], curses.ACS_PI)

    if not ate_food:
        tail = snake.pop()
        w.addch(int(tail[0]), int(tail[1]), ' ')

    w.addch(int(snake[0][0]), int(snake[0][1]), curses.ACS_CKBOARD)
