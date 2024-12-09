let input = [
  "190: 10 19",
  "3267: 81 40 27",
  "83: 17 5",
  "156: 15 6",
  "7290: 6 8 6 15",
  "161011: 16 10 13",
  "192: 17 8 14",
  "21037: 9 7 18 13",
  "292: 11 6 16 20",
];
input = [
  "64288413730: 91 79 4 9 7 8 91 7 30",
  "230456169: 3 630 12 7 2 1 6 26 3 69",
  "376955: 7 96 4 914 387",
  "2102493: 259 8 30 467 9 17",
  "144043977: 96 25 7 5 1 3 4 5 5 67 3 1",
  "691452935348: 864 3 16 1 3 8 25 6 348",
  "3472782: 119 2 384 5 687",
  "1627001896: 535 1 6 328 3 2 962 4 3",
  "24644441: 9 5 56 38 35 96 99 569",
  "48356500: 63 602 3 2 85 5",
  "21099440: 2 8 7 9 71 83 440",
  "93442: 33 6 342 7 76",
  "966401: 96 478 157 5 4",
  "9016: 88 5 2 3 215",
  "5278335745: 6 15 86 3 71 1 1 7 88 2 8",
  "30296778: 64 4 1 6 4 6 9 67 1 6 6",
  "660549: 14 902 720 42 2 985",
  "10997299576145: 143 1 94 96 47 8 1 45",
  "2708767806: 79 774 50 443 3 2",
  "3826013465684: 8 6 5 88 43 738 65 684",
  "4370535: 1 9 9 1 308 5 7 921 1 5 5",
  "268284: 1 4 3 3 3 1 8 38 9 73 3 9",
  "4932942: 7 908 9 775 67",
  "57820: 77 3 28 58 121 59",
  "3213956: 22 633 142 66 3",
  "2106786228: 220 14 15 1 31 6 22 8",
  "1810433087: 596 3 4 57 24 74",
  "6192: 616 412 4 6",
  "1880: 6 1 6 37 66 2 16 8",
  "64433821: 60 11 432 38 21",
  "9206506: 9 92 8 2 3 3 473 3 1 8 1 9",
  "44815741: 70 25 70 912 3 9 1 60",
  "116899244: 656 450 36 4 11",
  "4120: 2 3 8 55 40",
  "97844: 38 3 638 35 800 8 9 61",
  "92605659: 4 3 51 4 13 119 5 1 3 5 9",
  "17907621655925: 78 542 2 228 55 925",
  "29841: 6 13 136 835 819 25 7",
  "550207121: 5 6 5 69 3 32 3 5 54 6 6 5",
  "1493: 6 738 748 1",
  "2531: 42 6 45 6 749",
  "5186366: 96 1 6 36 73 1 605 53",
  "65402895: 6 4 465 3 8 1 5 8 2 7 6 46",
  "42965118: 9 9 41 9 3 3 137 266",
  "133: 22 5 8 8 7",
  "17145528694: 285 754 31 450 6 9 4",
  "3359666: 101 63 528",
  "34122760: 4 5 771 5 603 878 6 7 4",
  "25640341: 94 4 5 5 26 34 200 4 5",
  "953673600: 9 7 477 9 1 1 6 821 44 8",
  "44639873: 6 8 50 860 3 811",
  "384480771: 7 3 6 8 982 6 1 2 5 5 1 9",
  "1029304074: 35 8 1 7 58 15 1 358 16",
  "1069598: 70 6 40 28 5 1",
  "544501335: 825 660 884 449 2",
  "199: 2 50 5 2 85",
  "813270371: 951 6 2 37 1 4 955 6 8 3",
  "110505: 9 24 8 7 3 2 647 6 92 5 8",
  "93698167500: 90 8 7 95 71 9 375 6 1",
  "86663168: 5 8 1 74 376 548 9 8",
  "2025036: 4 3 3 302 45 6 2 6 9 2 2 1",
  "109466571: 1 89 99 23 175 39 3 4",
  "5435280217: 258 8 914 81 276 73",
  "2949251510726: 511 135 443 4 4 577",
  "2911041: 5 4 7 287 49",
  "1344423: 6 7 1 444 23",
  "10156: 9 2 9 39 24 841 6 64 36",
  "21047040974: 3 4 977 15 810 2 97 5",
  "179010: 4 5 99 9 90",
  "294720251715: 545 778 3 4 2 925 2 5 9",
  "38167353884: 6 731 4 9 5 7 9 83 2 50",
  "9184176: 481 265 93 72",
  "115752: 62 6 1 1 80 152 191 6",
  "284935: 5 92 95 366 381 5",
  "111632278: 3 582 111 576 22",
  "56679084: 4 8 1 7 2 3 9 9 322 7 22",
  "150495424: 5 95 678 5 8 3 2 6 4 8 2",
  "36540188532: 522 350 94 2 485 47",
  "25: 1 4 5",
  "3198840: 135 389 20 8 5 61",
  "103529984: 6 85 9 565 4 3 5 458 4",
  "3281192: 1 11 709 298 4",
  "73545: 77 106 9 9 6",
  "19570215631: 389 1 582 5 479 6 4 6 7",
  "983910880: 8 81 83 7 1 39 3 469 1",
  "16811480: 1 1 7 1 5 3 2 8 6 807 4 14",
  "480000: 57 85 99 4 341",
  "65771773: 657 714 3 67 6",
  "14979801: 27 121 1 7 97 9 2 5 7 4",
  "1433829668360: 738 9 477 5 503 4 5 2 4",
  "4071566: 610 2 47 6 71",
  "48492: 8 6 49 2",
  "61054: 52 3 3 37 4",
  "798452: 798 4 52",
  "606: 6 3 6 6 6",
  "492637266: 792 3 138 4 6 59 1 3 22",
  "1944701: 6 4 81 181 520",
  "13560759004: 802 32 5 4 177 169 91",
  "11301208011: 7 6 28 8 68 4 97 8 953 1",
  "524: 4 9 49 69 4",
  "2213964: 7 188 308 7 53",
  "80428411552896: 837 795 953 676 96",
  "3517087665: 96 62 5 2 2 7 9 52 65",
  "14515851: 85 43 6 3 900 2 42 49 7",
  "1257: 518 591 71 12 52 9 4",
  "235514545: 707 1 2 231 7 9 4 8 6 5",
  "2901484800000: 9 49 965 2 90 60 64 75",
  "441929: 7 63 44 41 4 75",
  "85354: 34 3 3 5 3 3 9 2 2 41 3 7",
  "3003221: 7 5 5 44 30 17 13",
  "32642292: 32 64 22 83 9",
  "20541967333: 681 6 798 63 12 97 33",
  "983147880: 73 14 94 22 65",
  "6386: 59 91 53 3 961",
  "10692: 2 2 2 1 8 40 86 7 9 3 66",
  "98520: 1 691 7 123 30 4",
  "383636: 7 854 5 8 6 5 3 18 8 4 3 8",
  "151: 9 6 55",
  "20328035: 18 37 40 42 220 33 2",
  "41345871: 4 8 9 4 78 4 850 1 3 7 1",
  "536775818: 4 3 9 7 6 143 5 46 871 8",
  "510055797: 9 46 3 539 9 4",
  "153188743707: 8 25 940 184 6 28 6 27",
  "182784192: 8 34 64 5 3 7 8 1 6 2 5 43",
  "161232: 3 2 643 7 7 5 99",
  "67454: 3 32 8 395 58",
  "1876: 74 1 3 19 90 304",
  "203352531293: 78 2 76 376 91 93",
  "6161474: 9 64 6 635 145 7 5 40 3",
  "635921842: 2 420 13 7 922 401 1 2",
  "8645243696: 7 489 589 4 4 8 8 134 1",
  "2317257234: 1 48 586 9 2 3 83 3 9 6 9",
  "45236: 12 92 2 10 43",
  "2880974425: 576 5 747 227 425",
  "333711769248: 243 800 917 34 6 312",
  "6188793: 2 192 156 526 201",
  "382518336: 6 4 890 724 9 5 552 8",
  "35700: 8 7 98 649 508 5 4 7",
  "762848067: 2 7 6 7 13 1 9 2 2 8 2 371",
  "1484000000: 5 625 29 2 7 80 250 7 8",
  "78746499: 11 663 50 83 81",
  "15876: 7 56 21",
  "1617961092: 5 603 440 672 9 132",
  "1019335531: 6 78 642 39 876 5 10 3",
  "58975970: 88 2 53 10 338 7 730 1",
  "99268075559: 262 934 830 755 59",
  "65373960: 4 7 8 749 6 9 6 7 670 7 1",
  "24640094683: 412 380 286 311 83",
  "12459: 59 246 9 101 3 3",
  "224960: 4 499 2 5",
  "63304966848: 5 5 55 6 42 2 69 5 68 4 8",
  "18180610: 12 9 9 606 608",
  "11636697: 364 74 9 7 8 1 1 6 3",
  "437: 1 13 4 44 259",
  "133186599: 386 4 5 7 18 149 9 273",
  "4296244: 8 5 9 354 518 2 4 442 4",
  "4991875: 68 807 815 7",
  "3103: 14 1 2 94 9",
  "243445: 5 4 84 5 6 22 5 53 3 8 5",
  "15296463: 8 19 96 4 63",
  "521668: 6 70 14 39 9 945 7 4",
  "61008657: 4 2 3 5 3 3 1 960 3 650 4",
  "213117984: 359 4 6 78 6 986",
  "238915893: 323 8 9 802 65 30",
  "3117470880: 234 91 20 1 732 2",
  "35204825: 4 98 4 6 32 1 66 179",
  "60297: 11 3 2 85 597 1",
  "603553213: 8 4 9 793 590 82 9 4",
  "648871: 79 2 8 520 351",
  "1090677: 3 8 6 408 94 5 3 7 924",
  "44526660558: 5 3 3 60 610 8 894 5",
  "30975402: 82 73 9 13 5 35 3 33 69",
  "2797: 3 4 8 59 377 9 6 37",
  "10167816: 16 689 3 1 922",
  "7116: 43 25 348 5 1",
  "10080: 7 118 1 16 5",
  "1286605: 9 57 209 12 1",
  "5641: 4 28 97 39 1",
  "25461: 840 3 28 3 168",
  "24458560: 813 60 2 5 16 28 20",
  "73836977: 87 943 9 77 1",
  "111940774200: 3 383 290 774 200",
  "57424: 5 65 10 912 2",
  "752385768: 653 8 85 2 4 9 880 5 1 8",
  "16488406180: 1 3 6 81 4 5 5 3 8 733 7 9",
  "268263: 45 366 652 20 271",
  "2302139112: 30 7 71 1 919 21 4 2",
  "308447: 70 440 32 12 7",
  "1109158414: 732 482 6 68 449 7",
  "1142: 31 36 6 13 7",
  "4311617856: 4 8 7 2 55 3 9 3 3 52 4 4",
  "55219027853: 829 6 8 1 416 9 89 2 7 3",
  "600691: 7 9 16 456 65 37 943",
  "18982810: 640 6 9 324 70 277 1",
  "2479694880: 8 9 461 42 2 52 710 3",
  "1725856: 3 91 830 318 110 22",
  "364307: 7 98 8 45 36 1 335 5 5 4",
  "416369616212: 7 3 5 9 7 239 6 9 62 1 2",
  "89372539: 24 86 6 8 43 3 8 7 539",
  "43649686080: 8 2 504 309 231 392 3",
  "5450: 452 2 5 455 2",
  "801918: 9 6 3 1 664 17 3 69 552",
  "9288627045930: 8 1 91 7 1 9 9 3 588 5 9 2",
  "502573: 1 6 88 3 5 8 11 2 4 8 957",
  "2275249227: 96 163 14 878 29",
  "119336707: 99 150 67 8 707",
  "56052: 2 30 54 491 78",
  "94465: 13 90 916 114 1 3",
  "729008280: 510 637 51 44",
  "140821: 138 1 1 839 980",
  "6083854: 8 76 377 4 2 78",
  "1886890: 14 1 669 8 2 294",
  "165298320: 3 423 29 5 70 9 297",
  "1534204989152: 9 588 781 182 2 16",
  "508326: 85 6 40 775 5 8 2 3",
  "4992289662: 32 3 583 477 187 30",
  "151184: 995 717 1 5 88",
  "133369957: 190 472 56 51 7",
  "3878781: 3 878 1 78 1",
  "3795035200: 98 44 540 40 22",
  "36005207: 4 87 3 8 99 5 830 369 8",
  "25391193: 70 642 565 85 8",
  "267540: 44 2 5 5 86 8 3 3 4 3 840",
  "34060160: 21 7 1 7 7 1 7 245 2 2 2 8",
  "104810565466: 5 2 3 668 4 48 7 3 4 60 6",
  "38399: 76 84 3 6 77",
  "44120979093: 5 6 7 122 5 4 57 541 9 3",
  "19301102: 13 786 350 4 698 4",
  "50556: 7 2 6 25 99 3 97 941 8 7",
  "1347815268: 403 40 6 2 7 17 55 3",
  "1153200: 2 6 39 1 930",
  "838660117: 9 6 2 6 8 4 53 72 5 2 120",
  "69072193807: 972 847 80 71 7",
  "6112844169: 6 674 43 8 328 57 9",
  "4195216964: 3 4 452 62 4 39 908",
  "2042564: 20 42 550 9 5",
  "23104713: 5 854 34 6 4 98 9 224",
  "203219: 64 13 23 246 15 1 2 9",
  "34607812: 23 45 512 994 705 3",
  "64993245117: 69 3 23 4 6 9 5 63 3 5 48",
  "12355336316: 74 3 57 259 890 79 4",
  "48319644808: 3 641 6 47 80 56 931 8",
  "41944: 465 59 80 24",
  "5993530053: 599 352 983 22 3",
  "13679965404: 3 6 4 6 73 6 962 1 3 40 4",
  "53500: 901 1 340 43 94",
  "26780520: 95 8 130 13 4 44 8 5",
  "779624: 23 472 35 5 9",
  "2879520: 31 3 2 3 9 4 7 4 7 5 2 662",
  "1251077: 9 3 724 64 5",
  "65246: 71 30 1 646 1",
  "16: 6 2 2",
  "362621273: 55 78 7 8 5 65 248",
  "85842: 3 89 156 3 342",
  "1650647484: 21 52 79 81 59 324",
  "23904929: 85 711 81 2 3 5 3 4 460",
  "30563647: 339 594 2 9 7",
  "3219312: 468 2 679 3 1 29 6 138",
  "966000632: 1 4 8 800 70 629",
  "138614170: 14 330 441 5 3 925",
  "10826201861: 664 18 2 8 3 815 215 1",
  "80625960: 569 53 54 54 72 37 1",
  "3919632: 6 1 621 8 74",
  "327364210: 301 9 3 22 2 3 3 4 78 5 2",
  "115704: 5 1 214 273 13 3 92 8 9",
  "5561453927: 737 3 653 9 4 428 6 93",
  "87643296327: 12 22 1 1 78 918 327",
  "239603: 1 291 3 82 80 3",
  "3622838: 352 7 86 9 89 38",
  "148812: 3 832 653 1 2",
  "16250: 8 4 9 8 7 4 1 1 80 9 9 622",
  "39296223432: 7 859 2 43 10 5 84 32 2",
  "259056345: 712 78 77 84 39 93",
  "989887572: 106 415 5 5 5 9 19 6 47",
  "5143: 64 80 23",
  "248304: 5 4 5 5 7 4 978 4 3 6 7 8",
  "3603692: 19 657 2 65 41 612",
  "42839616: 8 22 51 27 698 12 368",
  "98154830131: 973 8 548 30 13 1",
  "165277175: 2 361 7 7 175",
  "7780613488: 6 5 3 5 6 13 8 8 606 9 5 8",
  "18416712: 5 471 2 9 2 964 8 5 8 9 8",
  "59594828: 586 9 857 4 3 84 30",
  "790508: 788 93 81 6 70 8",
  "48543696: 89 8 65 6 32 6 2 831",
  "72083332391: 5 144 833 323 94",
  "764137724955: 6 6 3 4 3 8 6 5 48 67 1 67",
  "526190: 68 386 61 2 8",
  "4123: 86 556 5 908 5",
  "64381432554: 773 64 76 5 77 5 75 6 9",
  "164082757: 3 5 2 6 5 6 4 31 866 4 2 5",
  "237884584: 26 43 162 90 4",
  "36083237676: 70 359 56 2 3 14 7 46 6",
  "1878: 55 246 7 5 6",
  "457819: 3 3 228 7 807 7",
  "158996880072: 1 670 11 2 17 9 8 70 7 2",
  "6701935: 95 7 418 7 9",
  "110719: 8 502 31 7 7",
  "319891398: 4 551 655 87 729 878",
  "833602896: 66 8 84 434 103 3",
  "185184: 694 969 905 4 72",
  "213952: 41 1 40 4 63 59 4 16 8",
  "78931: 1 1 7 3 9 4 943 9 3 9 91",
  "134301604: 47 133 36 8 36 575 4",
  "671421: 3 6 2 6 8 2 97 7 4 6 328 5",
  "70158: 3 13 318 42 5 9 9",
  "5733100809: 915 4 59 3 8 8 236 7 8 9",
  "850783995: 696 1 5 25 35 7 23 279",
  "44154017: 7 35 3 30 6 15",
  "155318: 17 82 5 312 878",
  "34876800: 44 2 601 34 180 7",
  "18226: 981 3 86 6 52",
  "580372590: 56 86 987 72 590",
  "719555: 9 978 9 9 9 32",
  "4605867721045: 657 98 1 101 2 70 4 5",
  "24647706: 53 35 77 1 6",
  "7789398384: 778 93 942 7 34 84",
  "256672710: 320 67 3 3 42 95",
  "256570381: 249 3 98 62 165 6",
  "37337764268: 3 18 86 804 4 265",
  "1143: 4 32 4 8 2 9 980",
  "26189: 21 5 1 87",
  "1167: 717 380 70",
  "4151995878: 3 7 8 868 9 2 777 16 9 5",
  "20952985: 6 5 298 8 799 9",
  "658294531020: 6 7 1 6 588 1 5 5 310 2 2",
  "51940980: 6 8 9 5 9 2 27 4 3 4 546 6",
  "319465594: 4 46 68 894 7 8 2",
  "330139509: 823 44 7 93 2 807 49",
  "4478992: 8 9 6 4 9 5 227 393 7 4 2",
  "80030190: 4 50 4 292 33 957",
  "9832310681: 51 79 62 94 4 245 61",
  "815760: 9 407 972 4 44",
  "25354826: 160 93 19 35 826",
  "6151392: 6 1 5 13 93",
  "3226554: 9 497 91 51 54",
  "951: 29 756 128 4 34",
  "9197362: 6 4 2 7 4 6 5 5 14 4 383",
  "78551: 3 75 542 9",
  "111194: 281 9 38 99 4",
  "3928357: 8 49 834 9 8",
  "169317347: 6 1 7 3 91 3 5 4 9 66 7 47",
  "32251779: 10 4 2 8 2 9 2 21 53 4 1 7",
  "30253: 3 6 3 9 1 67 1 6 1 3 22 1",
  "3433675: 4 7 4 7 95 7 37 5 5 8 60 7",
  "7657276076: 73 3 2 67 3 617 28 4 9 8",
  "67351065: 4 422 16 41 5 1 4 241",
  "4095: 6 5 63",
  "844326123: 3 488 81 11 152 3 22 3",
  "1012680: 94 1 439 510 970",
  "146132303: 44 886 237 663 473",
  "41212: 73 17 225 97 12",
  "478035: 8 18 4 34 875 95 3",
  "58896002381: 917 3 22 2 1 64 237 7 4",
  "1659008661: 4 377 189 69 11",
  "1459654: 82 178 54",
  "18746219682: 6 7 39 1 3 218 2 994 7 6",
  "678912: 9 359 922 2 320",
  "4531938: 8 30 2 80 7 78 6 3 5 37",
  "2857380373: 31 3 84 50 9 2 788 373",
  "59851224235490: 997 5 15 5 4 6 23 548 9",
  "246475267: 36 683 7 44 107 4 769",
  "59518416: 574 1 23 5 6 9 6 8 1 36 6",
  "2962112: 2 4 54 4 9 9 5 3 7 45 583",
  "2489850: 301 4 4 4 4 29 25 503",
  "38062: 21 6 176 2 44",
  "2069: 6 9 1 9 8 4 3 4 5 6 461 22",
  "14854350054: 7 9 444 6 2 43 5 3 7 54",
  "500321: 4 15 64 4 1 4 321",
  "132252595: 8 5 2 252 5 94",
  "1434300510592: 700 3 683 510 592",
  "2411784329: 7 5 5 658 7 2 72 6 8 74 6",
  "5161755: 3 4 43 175 5",
  "626940: 6 5 4 9 2 74 7 836 9 270",
  "18794: 6 3 78 8 8",
  "16181779274: 53 67 401 6 947 2 53 2",
  "2620940: 37 3 240 39 20 7",
  "5358398: 1 4 6 367 21 2 9 7 39 8",
  "395221248: 2 6 742 910 8 576",
  "2269: 6 9 9 27 2 973",
  "23347872: 4 81 271 5 72",
  "30062928: 82 9 743 683 4 7",
  "32333: 7 2 298 10 5 1 82",
  "6065859: 2 8 4 8 9 5 9 4 7 3 8 859",
  "17176: 75 51 423 46 4",
  "177918: 8 4 94 95 4 866 388",
  "19283381223: 4 72 881 63 1 7 76 2 3",
  "569904: 67 882 8 4 6",
  "973406: 957 63 38 920 46",
  "1375428960: 6 37 970 687 48",
  "221204: 3 384 48 5 4",
  "9338621: 93 29 9 610 8",
  "295654092789: 238 55 42 616 2 873 3",
  "600078: 2 4 25 4 1 971 381",
  "304: 6 7 4 30 4",
  "298989664: 7 2 6 2 5 10 6 4 728 5 6 4",
  "205522805: 395 1 5 4 311 516 2",
  "270120: 32 8 4 51 4 177 25 60",
  "77992740: 5 4 5 38 762 3 2 315 1 3",
  "1412755629: 6 27 8 8 88 77 4 5 1 8 8 5",
  "236: 52 31 2 49 21",
  "24200: 8 72 64 3 7",
  "433162: 1 6 5 76 3 4 2 7 38 23 7 2",
  "8457022095: 5 9 94 32 89 702 5 2 3 5",
  "4718519: 7 6 13 52 4 6 1 766 559",
  "29256: 29 121 83 18 33",
  "388934891: 7 7 1 89 5 96 447 9 9 8 3",
  "274063839: 3 9 4 5 97 4 1 7 9 651",
  "792224259: 613 1 759 9 11 929 69",
  "5344491730542: 8 888 3 8 295 94 542",
  "225720: 3 1 9 90 209",
  "44436: 26 46 1 6 6 5 5 1 5 209 6",
  "616388: 1 58 2 6 388",
  "84658: 51 6 330 58",
  "61095174221: 2 289 7 151 5 741 9 3 1",
  "624188: 78 82 52 818 101 6 8",
  "6457: 7 832 1 14 570 42 6",
  "55512660355615: 6 168 9 660 355 61 5",
  "29198988: 1 2 9 704 8 9 32 6 2 4 9",
  "4686110: 781 60 27 83",
  "327770: 32 99 417 6 8",
  "1841813297379: 2 91 7 5 8 7 7 921 931 9",
  "12535012: 6 9 877 34 44 9 28",
  "1042: 5 7 8 622 62",
  "1921059: 318 6 5 3 4 2 63 8 1 8 41",
  "4338080: 3 6 9 88 2 5 608",
  "1466395: 65 5 161 4 7 1 28 954 5",
  "2043115844631: 6 92 3 1 952 273 31 2",
  "20717193: 7 3 16 2 912 533 21",
  "104593090: 873 25 282 59 946 7",
  "20760: 829 85 81 43 20",
  "516280: 1 417 33 38 3 327 7 3",
  "21824431200: 4 94 726 82 975",
  "76572: 2 64 79 5 9 6 6 51 5 54",
  "28421295360: 9 9 9 2 3 375 9 4 48 80",
  "15725965920: 8 8 45 97 4 226 6 70 7",
  "2192731311: 481 168 135 3 93 67",
  "4255: 834 8 9 1 5",
  "9611124: 31 762 3 815 2 9 4 994",
  "25331461341: 5 6 7 8 2 2 30 6 8 11 5 9",
  "1595880: 5 6 5 5 6 4 7 544 9 5 2 99",
  "3158499: 939 42 525 18 79",
  "1700028721746: 732 771 232 174 6",
  "116671594: 9 5 5 5 26 6 6 6 678 23",
  "323860350: 8 2 8 96 18 32 7 4 4 5 25",
  "7031: 91 9 1 7 588",
  "6280294: 704 8 589 59 294",
  "156529: 6 97 72 21 793",
  "30518262: 4 4 9 841 7 4 6 9",
  "696476: 1 5 6 67 5 659 908 40",
  "203616: 3 98 42 8 6",
  "70462318290: 74 3 431 119 910",
  "9170707391: 43 6 99 3 204 176",
  "1038160: 6 64 7 8 36 5 76",
  "50937: 490 9 52 345 640",
  "271152: 5 7 4 26 9 83 4 6 3 813 3",
  "3022601130: 24 4 311 85 342 159",
  "15126: 8 885 2 3 963",
  "24294419586: 5 881 51 106 81",
  "118272972: 6 3 4 26 8 9 540 3 3 5 7",
  "4402091685: 27 5 82 399 5 61 561 4",
  "111859: 64 57 924 18 37",
  "4914: 347 4 1 14",
  "594189: 185 3 44 8 4 8 2 6 47 5 4",
  "1254: 6 181 20 2 6",
  "781138122: 3 543 3 6 9 74 1 1 40 2",
  "12630: 9 7 6 68 5 7 6 3 1 3 165 6",
  "55725: 361 3 293 51 13 3 72",
  "1143632: 3 38 36 3 2",
  "153850: 17 9 850",
  "90216: 3 2 2 5 34 9 3 2 4 3 6 12",
  "59805: 67 68 443",
  "393488508995: 56 21 264 413 2 4 6 7 1",
  "34400: 676 3 672 4 21 25",
  "157113477: 359 84 521 9 708",
  "433254: 857 434 15 19 4 326",
  "10017346: 68 3 927 3 7 346",
  "1127: 37 3 4 6 7",
  "9558: 14 627 73 6 701",
  "26618042: 14 2 12 9 4 4 1 1 66 2 42",
  "752398826: 8 94 31 8 80 825",
  "468704: 46 25 7 59 604",
  "29316000: 61 5 858 2 7 75 758 7 8",
  "6823711592: 960 6 1 93 4 8 268 398",
  "2987040: 2 396 7 8 6 7 5 8 4 9 4 60",
  "77288552: 4 2 2 7 6 835 5 554 4 44",
  "46036028: 8 73 96 677 10 8 5 4 1",
  "2297817000: 75 9 5 3 6 63 6 3 34 8 8",
  "90: 4 6 74 6",
  "16973082771: 7 97 408 50 4 82 771",
  "723: 5 57 10 10 3",
  "4176: 6 305 321 64 6",
  "210943590: 87 372 2 37 434 4 15",
  "6583161720: 2 1 9 8 3 85 4 6 249 4 5 6",
  "236106070257: 4 9 95 9 1 858 59 1 55 2",
  "137060577: 2 7 2 4 3 1 445 2 1 9 69 2",
  "3528697210: 5 5 1 3 787 4 958 6 1 2 5",
  "6464593606244: 64 93 2 62 9 705 3 7 92",
  "17853: 1 8 647 3 74 310",
  "2556669358237: 7 6 6 1 3 3 2 92 6 9 823 7",
  "419724: 857 489 5 1 7 638",
  "1356: 4 69 58 332 593 97",
  "27593664: 93 883 8 40 42",
  "3855768: 97 5 3 96 569 8 826 6",
  "36893894830: 376 9 140 138 7 79",
  "15559530: 609 27 6 7 6 9 958 3 9 5",
  "1718032779: 29 5 77 1 5 587 262 5",
  "218925: 23 1 50 2 49 175",
  "3905167349265: 1 46 324 5 1 4 234 843",
  "181705: 268 404 270 2 263",
  "10496976: 178 52 588",
  "52210475: 5 801 1 63 9 8",
  "7188: 753 5 9 4 362",
  "241547936: 4 78 3 59 613 8 499 4",
  "9313: 83 1 5 50 67",
  "2012816904: 41 68 6 69 1 73 6 9 3 8",
  "554501: 55 44 99",
  "7663325508: 4 257 4 20 612 9",
  "24713450: 120 327 50 629 40",
  "5602093: 767 41 73",
  "40578645: 6 32 8 93 8 7 864 1 8 1",
  "8083151: 37 32 739 31 49",
  "249871440: 4 26 8 221 7 673",
  "2634215: 71 7 53 25 54 1 16 23",
  "324161: 3 22 2 1 61",
  "106897303: 432 2 4 7 59 8 5 2 7 8 6 7",
  "229610631: 558 575 733 714 369",
  "233821310: 9 60 433 812 4 489 5",
  "39270: 8 68 1 170 3",
  "18816313732: 3 5 5 78 8 2 3 1 1 4 6 542",
  "4308: 834 17 4 4 900",
  "25330058: 140 3 5 596 55",
  "8808870: 59 65 6 109 798 3 5 4 7",
  "36541877: 5 865 8 5 2 7 25 75 2",
  "4321100: 5 8 1 14 5 5 5 5 7 953 7 5",
  "127410456137: 7 92 918 48 3 8 87 137",
  "56880: 9 679 2 30 79",
  "106796160321: 9 4 3 697 4 5 384 6 3 21",
  "12696353411: 897 912 97 8 2 8",
  "1317: 5 1 219",
  "4506067: 52 53 327 5 7",
  "1032768: 8 6 34 4 72",
  "47792: 96 468 4 330 8",
  "148813: 3 2 1 722 29 62 1 84 7 1",
  "5571: 3 7 8 3 34 81 9",
  "51032215: 978 8 4 47 584 647 90",
  "2175: 33 7 7 9 9 24",
  "21125127855: 5 7 2 6 415 97 785 5",
  "72657447267: 21 8 2 7 1 3 6 1 9 2 6 857",
  "13194: 29 614 1 4 1 9 760 5 2 1",
  "3716117391: 7 53 5 558 559 386 5",
  "57760884: 91 9 269 2 8 64 9 172 8",
  "22394853473: 651 50 659 688 81",
  "28416821412: 947 227 37 1 9 4 3",
  "135864079: 1 224 370 3 7 1 1 8",
  "17322991: 2 63 21 7 35 9 3 8 1 57 7",
  "1876943: 5 374 6 940 3",
  "29392250: 8 5 955 5 790 445 5",
  "11138360: 794 6 5 1 1 288 33 7 2 2",
  "23711710488: 426 3 98 235 9 3 7 24",
  "748455: 396 813 3 5 615",
  "2911600: 565 690 8 290",
  "9350: 933 79 23 9 35",
  "4444052147: 4 440 3 36 3 3 686 14 7",
  "37315974494: 138 3 616 5 938 7 1 9 1",
  "7597472: 834 91 6 74 72",
  "5660264855: 2 8 599 341 5 851 6",
  "1004371132: 9 756 276 28 373",
  "4996: 5 803 1 441 4",
  "981846: 1 3 64 9 22 37 24 3 6",
  "62308: 8 8 2 81 2 6 88",
  "4799: 890 51 5 81 8 5",
  "3697566: 8 8 45 3 3 261 6",
  "47147: 697 341 2 5 45 122",
  "9362: 93 5 3 1 2",
  "127646682: 875 9 6 5 9 6 8 81 4 8 3 3",
  "1519106029630: 64 46 86 338 2 7 1 6 4",
  "4176: 81 5 26 403 5 6",
  "31200: 6 27 19 6 100",
  "22557668: 85 6 78 9 37 7 9 1 77",
  "1838: 43 7 160 5 7 7 1 82 692",
  "3505: 8 38 6 73 15 8 587 6",
  "139877308526: 36 2 8 69 7 4 9 459 5 26",
  "115508: 2 3 52 600 4 6 78 85 99",
  "73: 54 5 6 5 3",
  "11117039457: 3 88 97 9 912 516 2 4 9",
  "101476: 4 27 1 6 3 49 6 6 7 3 882",
  "71051003108: 3 7 516 5 3 6 79 4 563",
  "1408920005: 7 6 46 5 4 15 5 8 199 5",
  "4567288: 7 3 665 62 58",
  "16547564: 165 4 7 536 27 1",
  "32420585: 2 1 5 157 59 10 2 5 7 7 8",
  "5682885: 64 2 85 39 965",
  "12719252: 73 55 479 48 59 28",
  "126279: 10 5 7 1 1 9 22 57 2 3 9",
  "312837: 6 51 4 2 897 3 1 71 3 9",
  "15251921352: 28 843 8 2 524 58 9 9 8",
  "19117804: 58 759 585 1 4",
  "5469282: 449 81 159 1 9 882",
  "123961840129: 6 5 366 1 8 8 48 6 49",
  "4538624: 2 26 9 303 28 32",
  "4647704: 7 1 148 8 8 65 464",
  "59553166: 91 62 65 68 98",
  "1749153: 305 1 8 3 2 90 230 1 3",
  "26877927: 45 4 309 97 86 9",
  "20403125: 1 92 10 759 755 16 5",
  "49032608: 52 7 31 7 3 5 85 6 14 3",
  "266236: 738 18 1 2 8 3 4 9 5 4 8 2",
  "407523359: 2 213 26 7 2 8 3 6 9 4 9 2",
  "7964321328: 554 599 7 2 2 24",
  "5292084975: 49 8 135 849 1 75",
  "748553: 3 17 831 6 4 963 35 7 1",
  "858: 4 47 6 9 13 1",
  "26567147: 37 94 7 26 888 9",
  "264750906: 1 2 816 499 94",
  "22072138: 8 92 1 1 45 5 736 3 5 8",
  "1033: 35 4 6 32 161",
  "108028: 371 374 144 748",
  "24629302463: 57 8 15 264 426",
  "10674: 7 2 1 1 1 29 6 4 2 9",
  "273064: 572 60 6 428",
  "3771: 2 87 88 2 1",
  "1642741: 3 73 4 7 52 7 751 296 8",
  "8626: 4 4 9 329 2 65 849 459",
  "4522: 8 24 4 322 7",
  "4579924800: 48 891 944 5 381 55",
  "2483: 108 7 8 6 653 896 8",
  "1639304771: 2 968 169 47 71",
  "9420800: 5 80 12 87 80 640",
  "22016: 361 4 6 332",
  "2757294: 557 50 99 1 143 1",
  "4034670417625: 479 382 2 5 9 35 7 32 7",
  "186545: 8 42 8 2 8 3 5 240 894 5",
  "3367789562: 46 2 9 86 58 97 6 2",
  "31692758495: 6 1 5 56 92 787 8 84 9 5",
  "3687221020: 72 1 813 29 92 41 7 5",
  "1174068: 3 93 54 42",
  "6212876610: 25 8 29 117 35 887 30",
  "43997715: 1 466 59 3 10 3",
  "93053300: 7 705 6 6 72 3 5 2 1 25 2",
  "824971261: 6 30 44 150 97 12 61",
  "790043: 7 33 6 570 23",
  "1446700: 3 52 6 31 4 32 10 74 5",
  "188697796: 899 325 8 826 28 23",
  "62128108: 9 98 2 1 2 8 55 4 4 33 57",
  "269606526: 2 2 7 4 7 1 451 23 5 1 26",
  "40727: 637 19 61 670 41",
  "163974862: 4 6 70 8 6 99 5 5 5 7 2",
  "24957571896: 36 77 8 2 60 3 5 1 36 8 9",
  "398337: 753 529 1",
  "12531000: 995 76 156 4 75",
  "2369268: 2 9 1 4 6 5 1 975 1 9 8 1",
  "959968: 5 576 2 8 58 4 2 23 7 9",
  "19277779: 3 6 1 272 48 523 9 62 1",
  "2875: 5 76 99 6",
  "8752751700: 3 5 85 3 467 7 97 503 7",
  "63187: 84 6 7 396 9",
  "816126443: 6 796 4 6 6 322 2 3",
  "6447556730: 1 6 9 31 4 9 4 9 93 5 358",
  "1106: 3 31 8 6 88",
  "57056: 36 154 3 5 6",
  "2763419: 6 2 291 113 99 79 1 7 1",
  "32718971: 7 1 4 1 3 50 9 9 4 3 57 74",
  "120490076: 66 3 9 44 9 719 4 8 7 1",
  "6979920: 8 476 2 4 916",
  "6022045712: 1 601 167 36 9 3 64 12",
  "3436825088958: 143 8 239 50 88 957",
  "1481427625: 513 6 7 9 7 6 10 5 8 4 8 7",
  "1097550866074: 1 6 775 6 30 9 62 3 9 2 5",
  "1184486: 6 419 3 92 454",
  "1925030: 9 1 385 5 33",
  "1880172960: 926 72 7 4 3 9 1 9 94 1",
  "40501: 54 81 8 580 8 7 13",
  "234501: 66 9 1 5 70",
  "774432958: 484 80 7 6 2 6 958",
  "47851667615: 4 37 74 562 31 676 16",
  "1663446: 1 416 195 48 1 4 4 4 5",
  "46525: 56 827 202 6 5",
  "67840: 778 841 68 9 40",
  "119681348: 95 1 6 5 2 538 1 78 19 1",
  "1835433995913: 89 6 1 2 19 9 22 8 5 7 9 7",
  "3885633: 79 3 61 299 733",
  "1181222869: 14 89 94 993 5 2 871",
  "2259044: 2 511 49 829 87 2",
  "17659147653: 46 980 683 7 4 51 17 9",
  "8045506: 7 5 901 53 2",
  "14702223: 7 41 5 6 8 714 1 9 5 84 9",
  "40774706027: 44 4 95 70 77 467 3 52",
  "5550286445: 118 2 619 3 391 92 9 5",
  "565023096: 9 842 4 94 706",
  "55020: 248 83 9 8 4 5 620",
  "4796172: 58 50 93 9 3 2 673 786",
  "397644: 464 95 9 914 10",
  "3659947200: 98 585 7 240 38",
  "358785: 49 8 8 4 91 511 2 63",
  "21695046156: 9 785 6 930 3 4 3 7 4 81",
  "35339440: 7 1 5 33 1 880 56 7 8",
  "19456494: 122 219 3 42 57",
  "555189: 5 5 44 7 92",
  "55080183: 51 5 54 4 18 4",
  "167633333: 95 18 544 98 10 6 4",
  "509490: 32 18 278 4 466 544 9",
  "2671515: 3 690 771 5",
  "2178627673: 2 3 660 93 2 66 6 2 611",
  "1255776654369: 39 3 3 3 65 6 4 9 807 69",
  "1955515: 5 39 5 515",
  "4163520: 849 2 8 8 9 5 4 55 8 4 5 3",
  "297664269: 705 7 703 2 6",
  "1007957788: 7 86 5 1 16 9 1 370 9 8 8",
  "615600: 64 340 5 16 1 2 3 240 3",
  "671839: 2 957 7 7 7",
  "3679364: 4 2 36 9 6 2 8 6 8 682 4 4",
  "62349: 670 30 1 682 3",
  "74659416: 154 894 1 71 542",
  "13959000: 9 8 16 23 990 12",
  "52121632680: 5 212 1 632 680",
  "23815369: 8 4 7 1 66 4 897 90 7 7 5",
  "12089111: 120 61 28 111",
  "7895087415: 87 16 431 21 9 4 4 1 9 3",
  "544726: 53 1 3 3 7 2 4 4 3 3 1 26",
  "1016850240: 686 2 7 294 9 999 9 5 8",
  "712700: 5 8 62 9 3 63 8 9 2 844 5",
  "2292959459: 806 3 5 3 4 7 2 79 4 2 59",
  "415885666: 1 593 1 7 85 666",
  "2210: 1 9 3 532 798 868",
  "497834: 116 45 627 151 83",
  "216: 1 24 92",
  "1289365: 8 9 5 8 36 4 6 4 579 7 85",
  "67194816: 61 8 2 5 2 7 8 168 2 24 8",
  "81180: 2 83 226 598 82",
  "444550: 2 2 6 8 132 7 267 533 5",
  "253291776: 6 422 88 3 776",
  "520783740: 6 803 1 739 6 2 4 30 29",
  "6665: 8 7 119",
  "26535678: 10 9 6 4 5 7 69 1 2 4 324",
  "8909439693: 68 1 27 89 634 86",
  "108976: 50 89 28 4 1 7",
  "203112: 109 5 9 97 312",
  "6275557: 4 919 851 505 558",
  "59162940: 37 59 5 8 174 3 45 662",
  "4850: 9 523 6 63 74",
  "162291876: 53 11 98 2 75 7 447 3 3",
  "8361: 62 120 921",
  "2591: 87 23 590",
  "22457724: 5 6 3 8 448 68 28 876 1",
  "15640: 39 3 3 50 92",
  "1042002: 42 35 71 45 657",
  "2872147: 4 4 9 303 6 6 1 6 48 1 6",
  "135749: 44 5 9 7 303 5",
  "610317680964: 428 29 5 3 948 4 501",
  "3614347: 899 3 620 5 544 1 2 2 9",
  "2474220095: 7 4 5 660 6 7 76 68 7 95",
  "9754295: 91 5 7 71 145",
  "2440505: 21 911 87 5 479",
  "906663: 841 401 73 2 1",
  "326593610: 9 4 9 64 50 9 37 8 5 5 7",
  "7856: 46 8 24 8 2",
  "56728: 48 653 6 75 8",
  "26446421444: 84 3 9 8 2 2 352 485 2 2",
  "14309064: 29 1 924 89 6",
  "10858132837: 7 3 91 6 92 2 1 328 37",
  "110031480: 4 62 4 4 8 681 6 68 9 1",
  "183270830160: 2 87 5 3 3 7 728 6 9 5 8 6",
  "1738170: 117 3 55 8 90",
  "199413405: 72 8 1 5 8 4 8 8 30 5 9",
  "1024078: 58 882 2 90 4 1 9 1 9 1",
  "81018144: 15 399 604 6 54",
  "380432: 11 880 4 34 8",
  "756904320: 47 4 237 960 29 4 31 9",
  "37875841: 292 9 32 826 5 841",
  "18946: 611 31 5",
  "425004648: 804 659 83 9 35 1",
  "98830163: 455 2 6 23 181",
  "42235404: 5 844 3 540 4",
  "121345: 24 2 64 5 5",
  "18213336617: 416 9 3 6 6 81 617",
  "13878207: 554 25 22 6 166 40",
  "17332152: 3 5 91 12 34 9 5 3 3 4 3 8",
  "486720: 17 35 4 5 468",
  "69521: 18 5 2 746 889",
  "24464: 5 9 87 81 902 4",
  "579680: 1 9 5 1 1 497 53 8 8 6 16",
  "70545148: 37 22 8 3 7 5 7 4 3 56 9 7",
  "92546164: 9 2 511 35 164",
  "502900448688: 274 8 3 631 2 752 594",
  "261583474: 2 485 130 770 64 1 74",
  "8324640: 6 9 25 9 2 8 10 2 47 24 5",
  "883927: 9 774 169 72 5 859 16",
  "2363058: 11 579 763 4 6",
  "229942971699: 2 9 7 6 3 989 9 2 8 68 5 5",
  "88762181: 59 174 69 15 146",
  "535: 1 374 1 19 142",
  "3896068701: 81 1 68 1 80 88 696 6",
  "1821052: 2 481 734",
  "5695164: 181 7 841 91 36",
  "64607163: 3 6 5 9 6 18 7 97 14 2 3",
  "4459905363: 8 7 92 1 6 5 6 14 4 9 363",
  "10759540: 92 266 93 6 73 70",
  "74132578800: 460 69 335 84 83",
  "20723: 4 25 8 38 9 19 2 7 88 6",
  "29782203: 8 37 106 73 947",
  "1921715: 9 5 2 2 9 3 160 8 2 3 3 11",
  "145152: 6 4 39 6 89 58 56",
  "1493436877681: 7 5 426 1 66 5 3 82 6 81",
  "576576: 641 14 88 17 6",
  "64908: 56 4 4 228 463 22 71",
  "245893417888: 1 251 7 56 351 4 712",
  "2880342529218: 4 5 2 236 7 352 9 3 4 27",
  "108: 8 82 7 5 6",
  "14683: 3 8 6 98 185",
  "3410036: 8 16 18 526 339 6",
  "225840: 43 35 6 3 5",
  "64: 51 3 7 3",
  "43632269352: 971 234 9 7 127 27 8",
  "182654: 7 352 2 74 10 5 90 2 63",
  "8353994736: 83 53 994 733 3",
  "42552965: 351 70 50 6 3 96 4 96 5",
  "18379: 9 1 1 7 85 7 9",
  "65703: 929 9 69 1 1 25 940 6 8",
  "703626: 35 14 31 4 462",
  "4838557434: 80 553 59 6 183 743 4",
  "33374592: 2 9 2 71 4 24 888",
  "19947875: 717 7 6 3 5 5 51 8 6 532",
  "140339: 4 369 95 41 78",
  "6506952: 814 1 69 8 920 709 3",
  "50887: 525 5 95 287 250",
  "65062632: 836 85 163 377 2 6",
  "6662009528: 66 618 7 4 9 9 3 8 14 8",
  "3053345: 8 500 89 6 5",
  "72140629: 86 8 5 5 5 599 6 2 7 1 6 2",
  "4499: 8 7 99 7 7 3 2 1",
  "15752202: 7 3 895 8 44 3 1 33 2 5 7",
  "4928388480: 100 2 16 93 8 3 80 69",
  "109: 6 17 7",
  "5292008: 2 8 94 946 3 8 2 45 1 3 4",
  "9845309045: 8 77 872 3 6 532 5",
  "816929: 121 683 12 9 31",
  "1267274913: 22 8 72 749 13",
  "725976138: 2 63 99 783 11 7",
  "170838486: 1 1 7 3 350 4 7 2 3 6 8 6",
  "3252: 10 63 8 5 5 1 36",
  "4890566972: 488 463 593 689 8 2",
  "305667295613: 796 96 823 845 4 233",
  "87885: 9 77 1 19 837",
  "371014: 180 7 5 41 577",
  "19697057: 98 2 505 199 37",
  "8286699609: 7 299 91 46 7 3 39 9 9",
  "857291: 80 1 73 674 98 84",
  "921274333: 376 926 6 63 86 2 3 1 7",
  "540968278: 7 118 76 275",
];

let end_result = 0;
input.forEach((item) => {
  const [result_input, number_input] = item.split(": ");
  const result = +result_input;
  const numbers = number_input.split(" ");
  let totals = [+numbers[0]];
  numbers.forEach((number_input, index) => {
    const number = +number_input;
    if (index !== 0) {
      let new_totals = [];
      totals.forEach((element) => {
        const sum = element + number;
        const product = element * number;
        if (sum <= result) new_totals.push(sum);
        if (product <= result) new_totals.push(product);
      });
      totals = new_totals;
    }
  });
  if (totals.includes(result)) {
    end_result += result;
  }
});

console.log(end_result);
