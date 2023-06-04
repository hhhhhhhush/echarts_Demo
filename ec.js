// 获取当前时间函数
currentTime();
function currentTime() {
    let time = new Date();
    let year = time.getFullYear() + "年";
    let month = time.getMonth() < 10 ? ('0' + (time.getMonth() + 1) + "月") : (time.getMonth() + 1) + "月";
    let days = time.getDate() < 10 ? ('0' + time.getDate() + "日") : time.getDate() + "日";
    let hours = time.getHours() < 10 ? ('0' + time.getHours() + "时") : time.getHours() + "时";
    let min = time.getMinutes() < 10 ? ('0' + time.getMinutes() + "分") : time.getMinutes() + "分";
    let sec = time.getSeconds() < 10 ? ('0' + time.getSeconds() + "秒") : time.getSeconds() + "秒";
    // console.log(year + month + days + hours + min + sec);

    let day = document.querySelectorAll(".currentTime .day span");
    let tim = document.querySelectorAll(".currentTime .time span");
    day[0].innerHTML = year;
    day[1].innerHTML = month;
    day[2].innerHTML = days;
    tim[0].innerHTML = hours;
    tim[1].innerHTML = min;
    tim[2].innerHTML = sec;

}
setInterval(currentTime, 1000);

// 第一块echarts图表
(function () {
    var chartDom = document.getElementById('con1');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [2200, 3000, 3900, 5000, 5600, 5800, 5900, 6000, 7000, 8000, 8890, 10000, 11150],
                type: 'line'
            }
        ]
    };

    option && myChart.setOption(option);

})();

(function () {
    var chartDom = document.getElementById('con2');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [2200, 3000, 3900, 5000, 5600, 5800, 5900, 6000, 7000, 8000, 8890, 10000, 11150],
                type: 'line'
            }
        ]
    };

    option && myChart.setOption(option);

})();

(function () {
    var chartDom = document.getElementById('con3');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        xAxis: {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [2200, 3000, 3900, 5000, 5600, 5800, 5900, 6000, 7000, 8000, 8890, 10000, 11150],
                type: 'line'
            }
        ]
    };

    option && myChart.setOption(option);

})();

// 控制动画播放音乐
function anim() {
    let record = document.querySelector(".record");
    // console.log(record);
    var animRes = record.animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(360deg)' }
    ], {
        duration: 3000,
        iterations: Infinity
    });
    // 将动画对象return出去可以让别的函数使用，因为不return出去参数是私有的。
    return animRes;
}
// 控制cd旋转和音乐的播放与暂停
(function control() {
    let control = true;
    // 在control函数中使用controlAnim接收了return出来的animRes对象
    // 如果不加括号不会调用，controlAnim就是anim函数本身的内容，就没有paly和pause方法了，只有动画对象才有play和pause方法
    let controlAnim = anim();
    // console.log(controlAnim)
    let recControl = document.querySelector(".record");
    let myAudio = document.querySelector("audio");
    // console.log(myAudio)
    recControl.addEventListener("click", () => {
        if (control) {
            controlAnim.pause();
            myAudio.pause();
            control = false;
        }
        else {
            controlAnim.play();
            myAudio.play();
            control = true;
        }
    })

})();

// 中间块图表
(function () {
    var chartDom = document.getElementById('analyse');
    var myChart = echarts.init(chartDom);
    var option;

    let base = +new Date(2016, 9, 3);
    let oneDay = 24 * 3600 * 1000;
    let valueBase = Math.random() * 300;
    let valueBase2 = Math.random() * 50;
    let data = [];
    let data2 = [];
    for (var i = 1; i < 10; i++) {
        var now = new Date((base += oneDay));
        var dayStr = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
        valueBase = Math.round((Math.random() - 0.5) * 90 + valueBase);
        valueBase <= 0 && (valueBase = Math.random() * 400);
        data.push([dayStr, valueBase]);
        valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
        valueBase2 <= 0 && (valueBase2 = Math.random() * 40);
        data2.push([dayStr, valueBase2]);
    }
    option = {
        title: {
            left: 'center',
            // text: 'Tootip and dataZoom on Mobile Device' 
        },
        legend: {
            top: 'bottom',
            data: ['Intention']
        },
        // tooltip: {
        //     triggerOn: 'none',
        //     position: function (pt) {
        //         return [pt[0], 130];
        //     }
        // },
        // toolbox: {
        //     left: 'center',
        //     itemSize: 25,
        //     top: 55,
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: 'none'
        //         },
        //         restore: {}
        //     }
        // },
        xAxis: {
            type: 'time',
            axisPointer: {
                value: '2016-10-7',
                snap: true,
                lineStyle: {
                    color: '#7581BD',
                    width: 2
                },
                label: {
                    show: true,
                    formatter: function (params) {
                        return echarts.format.formatTime('yyyy-MM-dd', params.value);
                    },
                    backgroundColor: '#7581BD'
                },
                handle: {
                    // show: true,
                    color: '#7581BD'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                inside: true,
                formatter: '{value}\n'
            },
            z: 10
        },
        grid: {
            top: 110,
            left: 15,
            right: 15,
            height: 160
        },
        dataZoom: [
            {
                type: 'inside',
                throttle: 50
            }
        ],
        series: [
            {
                name: 'Fake Data',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                sampling: 'average',
                itemStyle: {
                    color: '#0770FF'
                },
                stack: 'a',
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(58,77,233,0.8)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(58,77,233,0.3)'
                        }
                    ])
                },
                data: data
            },
            {
                name: 'Fake Data',
                type: 'line',
                smooth: true,
                stack: 'a',
                symbol: 'circle',
                symbolSize: 5,
                sampling: 'average',
                itemStyle: {
                    color: '#F2597F'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(213,72,120,0.8)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(213,72,120,0.3)'
                        }
                    ])
                },
                data: data2
            }
        ]
    };

    option && myChart.setOption(option);
})();

// 倒数第二板块
(function () {
    // import * as echarts from 'echarts';

    var chartDom = document.getElementById('con4');
    var myChart = echarts.init(chartDom);
    var option;

    const data = [];
    for (let i = 0; i < 10; ++i) {
        data.push(Math.round(Math.random() * 200));
    }
    option = {
        xAxis: {
            max: 'dataMax'
        },
        yAxis: {
            type: 'category',
            data: ['苹果', '橘子', '梨', '香蕉', '榴莲', '芒果', '橙子', '蛇果', '菠萝蜜', '千禧'],
            inverse: true,
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 8 // only the largest 3 bars will be displayed
        },
        series: [
            {
                realtimeSort: true,
                name: 'X',
                type: 'bar',
                data: data,
                label: {
                    show: true,
                    position: 'right',
                    valueAnimation: true
                }
            }
        ],
        legend: {
            show: true
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
    };
    function run() {
        for (var i = 0; i < data.length; ++i) {
            if (Math.random() > 0.9) {
                data[i] += Math.round(Math.random() * 2000);
            } else {
                data[i] += Math.round(Math.random() * 200);
            }
        }
        myChart.setOption({
            series: [
                {
                    type: 'bar',
                    data
                }
            ]
        });
    }
    setTimeout(function () {
        run();
    }, 0);
    setInterval(function () {
        run();
    }, 3000);

    option && myChart.setOption(option);

})();

// canvas画大数据字体
const canvas = document.getElementById('bigData');
const ctx = canvas.getContext('2d');
const text = 'Big Data';
const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop(0, '#3C82D0');
gradient.addColorStop(0.5, 'green');
gradient.addColorStop(1, '#037BF3');
ctx.font = 'bold 80px Arial';
ctx.fillStyle = gradient;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText(text, canvas.width / 2, canvas.height / 2);

// 最右边块
(function () {

    var chartDom = document.getElementById('sec');
    var myChart = echarts.init(chartDom);
    var option;

    const gaugeData = [
        {
            value: 20,
            name: 'Perfect',
            title: {
                offsetCenter: ['0%', '-30%']
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '-20%']
            }
        },
        {
            value: 40,
            name: 'Good',
            title: {
                offsetCenter: ['0%', '0%']
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '10%']
            }
        },
        {
            value: 60,
            name: 'Commonly',
            title: {
                offsetCenter: ['0%', '30%']
            },
            detail: {
                valueAnimation: true,
                offsetCenter: ['0%', '40%']
            }
        }
    ];
    option = {
        series: [
            {
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                pointer: {
                    show: false
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false,
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: '#464646'
                    }
                },
                axisLine: {
                    lineStyle: {
                        width: 40
                    }
                },
                splitLine: {
                    show: false,
                    distance: 0,
                    length: 10
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    distance: 50
                },
                data: gaugeData,
                title: {
                    fontSize: 14
                },
                detail: {
                    width: 50,
                    height: 14,
                    fontSize: 14,
                    color: 'inherit',
                    borderColor: 'inherit',
                    borderRadius: 20,
                    borderWidth: 1,
                    formatter: '{value}%'
                }
            }
        ]
    };
    setInterval(function () {
        gaugeData[0].value = +(Math.random() * 100).toFixed(2);
        gaugeData[1].value = +(Math.random() * 100).toFixed(2);
        gaugeData[2].value = +(Math.random() * 100).toFixed(2);
        myChart.setOption({
            series: [
                {
                    data: gaugeData,
                    pointer: {
                        show: false
                    }
                }
            ]
        });
    }, 2000);

    option && myChart.setOption(option);


})();


