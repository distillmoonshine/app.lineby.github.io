import React from "react";

declare global {
    var Query: Array<[number, string, string, [number, number]]>;
    var NextID: number;

    var QueryId: Array<number>; //UID
    var QueryText: Array<string>; // Text input 
    var SelQuFilePath: Array<string>; // Query Selected video file path
    var FrameNums: Array<[number, number]>; // Found [start, end] frame numbers for 

    var escapeCode: string; // 

    var LastSearchRes: Array<number>;
    var ProjMedia: Array<number>;
    var AllMedia: Array<string>;
    
    var ScriptQueryViewMode: boolean;
}

class TestValsE extends React.Component {
    render() {
        global.QueryId = [0];
        global.QueryText = [global.escapeCode];
        global.SelQuFilePath = [global.escapeCode];
        global.FrameNums = [];
        global.escapeCode = '-1';
        global.LastSearchRes = [1,2,3]
        global.ProjMedia = [1,3,4,6,7];
        global.AllMedia = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12'];
        return null;
    }
}

class TestValsE2 extends React.Component {
    render () {
        global.Query = []
        global.LastSearchRes = [1,2,3]
        global.ProjMedia = [1,3,4,6,7];
        global.AllMedia = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12'];
        return null;
    }
}

class TestVals1 extends React.Component {
    render() {
        global.QueryId = [0, 1, 2, 3, 4];
        global.QueryText = ['60 frames', '10 frames', 'Nyan Cat', 'More Nyan Cat', global.escapeCode];
        global.SelQuFilePath = ['filepath', 'filepath', global.escapeCode ,global.escapeCode, global.escapeCode];
        global.FrameNums = [[0, 60], [120, 130], [0,0], [0, 0], [0,0]];
        global.escapeCode = '-1';
        global.LastSearchRes = [1,2,3]
        global.ProjMedia = [1,3,4,6,7];
        global.AllMedia = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test9', 'test10', 'test11', 'test12'];
        return null;
    }
}

class TestVals2 extends React.Component {
    render() {
        global.QueryId = [0, 1, 2, 3, 4];
        global.QueryText = ['60 frames', '10 frames', 'Nyan Cat', 'More Nyan Cat', global.escapeCode];
        global.SelQuFilePath = ['filepath', 'filepath', global.escapeCode ,global.escapeCode, global.escapeCode];
        global.FrameNums = [[0, 60], [120, 130], [0,0], [0, 0], [0,0]];
        global.escapeCode = '-1';
        global.LastSearchRes = [1,2,3]
        global.ProjMedia = [1,3,4,6,7];
        global.AllMedia = ['https://www.youtube.com/watch?v=fJ-QUDsRiJY', 'https://www.youtube.com/watch?v=_wIOqHSsV9c', 'https://www.youtube.com/watch?v=56K7rfVftbA', 'https://www.youtube.com/watch?v=WIFvInRA2xQ', 'https://www.youtube.com/watch?v=HkmlfHi9Ll4', 'https://www.youtube.com/watch?v=DHXBacEH0qo', 'https://www.youtube.com/watch?v=90IJanuV_0M', 'https://www.youtube.com/watch?v=3yEP4ooj1WI', 'https://www.youtube.com/watch?v=BA2qJKU8t2k', 'https://www.youtube.com/watch?v=Qy81O7LrB84', 'https://www.youtube.com/watch?v=DGAPEIxTwU4', 'https://www.youtube.com/watch?v=fp6jW8G2u7E'];
        return null;
    }
}

class TestVals3 extends React.Component {
    render () {
        global.Query = [
            [0, '60 frames', 'filepath', [0, 60]],
            [1, '10 frames', 'filepath', [120, 130]], 
            [2, 'Nyan Cat', global.escapeCode, [0,0]],
            [3, 'More Nayn Cat', global.escapeCode, [0,0]],
        ]
        global.NextID = 4;

        global.LastSearchRes = [1,2,3]
        global.ProjMedia = [1,3,4,6,7];
        global.AllMedia = ['https://www.youtube.com/watch?v=fJ-QUDsRiJY', 'https://www.youtube.com/watch?v=_wIOqHSsV9c', 'https://www.youtube.com/watch?v=56K7rfVftbA', 'https://www.youtube.com/watch?v=WIFvInRA2xQ', 'https://www.youtube.com/watch?v=HkmlfHi9Ll4', 'https://www.youtube.com/watch?v=DHXBacEH0qo', 'https://www.youtube.com/watch?v=90IJanuV_0M', 'https://www.youtube.com/watch?v=3yEP4ooj1WI', 'https://www.youtube.com/watch?v=BA2qJKU8t2k', 'https://www.youtube.com/watch?v=Qy81O7LrB84', 'https://www.youtube.com/watch?v=DGAPEIxTwU4', 'https://www.youtube.com/watch?v=fp6jW8G2u7E'];

        return null;
    }
}



export default {TestValsE, TestVals1, TestVals2, TestVals3};