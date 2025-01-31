{
  "options": {
    "PortraitSetting": {
      "type": "u8",
      "val": 3
    } 
  },
  "binhacks": {
    "JumpToAllPortrait": {
      "enable": "<option:PortraitSetting> == 1",
      "addr": "Rx10DC05",
      "code": "E9 [codecave:AllBigPortrait]"
    },
    "JumpToBossPortrait": {
      "enable": "<option:PortraitSetting> == 2",
      "addr": "Rx10DC05",
      "code": "E9 [codecave:BossBigPortrait]"
    },
    "JumpToStoryPortrait": {
      "enable": "<option:PortraitSetting> == 3",
      "addr": "Rx10DC05",
      "code": "E9 [codecave:StoryBigPortrait]"
    }
  },
  "codecaves": {
    "AllBigPortrait": {
      "code": "\
        83C0 0B\
        6A 00\
        6A 04\
        6A FF\
        E9 [Rx10DC0B]\
      "
    },
    "BossBigPortrait": {
      "code": "\
        83FE 04\
        75 03\
        83C0 0B\
        6A 00\
        6A 04\
        6A FF\
        E9 [Rx10DC0B]\
      "
    },
    "StoryBigPortrait": {
      "code": "\
        53\
        8B9F CC000000\
        83FB 00\
        74 1A\
        8B 1D <Rx1D1AD0>\
        85 DB\
        74 10\
        8B5B 34\
        83FB 00\
        74 08\
        83FE 04\
        75 03\
        83C0 0B\
        5B\
        6A 00\
        6A 04\
        6A FF\
        E9 [Rx10DC0B]\
      "
    }
  }
}