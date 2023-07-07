import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Screen2 = () => {
  return (
    <View style={styles.screen2}>
      <Image
        style={[styles.screen2Icon, styles.screen2Position]}
        resizeMode="cover"
        source={require("../assets/screen-2.png")}
      />
      <Image
        style={[styles.screen2Child, styles.screen2Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-181.png")}
      />
      <Image
        style={styles.iconfontAwesomeFreesolidc}
        resizeMode="cover"
        source={require("../assets/iconfont-awesome-freesolidccommentalt.png")}
      />
      <View style={[styles.ovalParent, styles.ovalLayout]}>
        <Image
          style={[styles.ovalIcon, styles.ovalLayout]}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
        <Text style={[styles.text, styles.allTypo]}>1</Text>
      </View>
      <Image
        style={[styles.screen2Item, styles.screen2Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-2.png")}
      />
      <Image
        style={styles.screen2Inner}
        resizeMode="cover"
        source={require("../assets/group-11345.png")}
      />
      <Text style={[styles.research, styles.mTypo]}>Research</Text>
      <Image
        style={[styles.bitmapIcon, styles.bitmapIconLayout]}
        resizeMode="cover"
        source={require("../assets/bitmap.png")}
      />
      <Text style={[styles.leagues, styles.mTypo]}>Leagues</Text>
      <Image
        style={styles.bitmapIcon1}
        resizeMode="cover"
        source={require("../assets/bitmap1.png")}
      />
      <Image
        style={[styles.bitmapIcon2, styles.bitmapIconPosition1]}
        resizeMode="cover"
        source={require("../assets/bitmap2.png")}
      />
      <Image
        style={[styles.bitmapIcon3, styles.bitmapIconPosition1]}
        resizeMode="cover"
        source={require("../assets/bitmap3.png")}
      />
      <Text style={[styles.home, styles.homeTypo]}>Home</Text>
      <Text style={[styles.leaderboard, styles.homeTypo]}>Leaderboard</Text>
      <Text style={[styles.profile, styles.homeTypo]}>Profile</Text>
      <Image
        style={[styles.bitmapIcon4, styles.bitmapIconLayout]}
        resizeMode="cover"
        source={require("../assets/bitmap2.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleLayout2]}>
        <Image
          style={[styles.rectangleIcon1, styles.rectangleLayout2]}
          resizeMode="cover"
          source={require("../assets/rectangle1.png")}
        />
        <Text style={[styles.pastGames, styles.pastGamesLayout]}>
          Past Games
        </Text>
        <Text style={[styles.all, styles.allTypo]}>ALL</Text>
        <Text style={[styles.won, styles.wonTypo]}>WON</Text>
        <Text style={[styles.lost, styles.wonPosition]}>LOST</Text>
        <Image
          style={[styles.groupChild, styles.groupLayout4]}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={[styles.dec2018, styles.decTypo]}>16:23, 12 dec 2018</Text>
        <Text style={[styles.satoshis, styles.wonTypo]}>100 Satoshis</Text>
        <Text style={[styles.pick5, styles.pick5Typo]}>PICK 5</Text>
        <Image
          style={[styles.mask9Icon, styles.iconLayout4]}
          resizeMode="cover"
          source={require("../assets/mask-9.png")}
        />
        <Image
          style={[styles.maskIcon, styles.maskIconPosition1]}
          resizeMode="cover"
          source={require("../assets/mask-9.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout4]}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={[styles.dec20181, styles.decTypo]}>
          15:00, 12 dec 2018
        </Text>
        <Text style={[styles.satoshis1, styles.satoshis1Position]}>
          40 Satoshis
        </Text>
        <Text style={[styles.upOrDown, styles.pick5Typo]}>UP OR DOWN</Text>
        <Image
          style={[styles.mask11Icon, styles.iconLayout4]}
          resizeMode="cover"
          source={require("../assets/mask-9.png")}
        />
        <Image
          style={[styles.maskIcon1, styles.iconLayout4]}
          resizeMode="cover"
          source={require("../assets/mask-9.png")}
        />
        <Image
          style={[styles.groupInner, styles.groupLayout4]}
          resizeMode="cover"
          source={require("../assets/rectangle-12.png")}
        />
        <Text style={[styles.satoshis2, styles.dec20182Typo]}>10 Satoshis</Text>
        <Image
          style={[styles.mask13Icon, styles.iconLayout4]}
          resizeMode="cover"
          source={require("../assets/mask-9.png")}
        />
        <Image
          style={[styles.maskIcon2, styles.maskIconPosition1]}
          resizeMode="cover"
          source={require("../assets/mask-9.png")}
        />
        <Text style={[styles.dec20182, styles.dec20182Typo]}>
          11:00, 11 dec 2018
        </Text>
        <Text style={[styles.bestOf5, styles.pick5Typo]}>BEST OF 5</Text>
        <Text style={[styles.seeMore, styles.pick5Typo]}>See More</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
        <Image
          style={[styles.rectangleIcon2, styles.rectangleLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle2.png")}
        />
        <Text style={[styles.myStonkPerformance, styles.bitcoinChartTypo]}>
          My Stonk Performance
        </Text>
        <Text style={[styles.pick51, styles.pick51Typo]}>Pick 5</Text>
        <Text style={[styles.upOrDown1, styles.mTypo]}>Up or Down</Text>
        <Text style={[styles.head2Head, styles.mTypo]}>Head 2 Head</Text>
        <Text style={[styles.text1, styles.textTypo5]}>{`81% `}</Text>
        <Text style={[styles.text2, styles.textTypo5]}>{`12% `}</Text>
        <Text style={[styles.text3, styles.textTypo5]}>{`7% `}</Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-2.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/group-21.png")}
        />
        <Image
          style={[styles.mask15Icon, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask-15.png")}
        />
        <Image
          style={[styles.maskIcon3, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.maskIcon4, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.maskIcon5, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.mask17Icon, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask-15.png")}
        />
        <Image
          style={[styles.maskIcon6, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.maskIcon7, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.maskIcon8, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.mask19Icon, styles.iconPosition6]}
          resizeMode="cover"
          source={require("../assets/mask-15.png")}
        />
        <Image
          style={[styles.maskIcon9, styles.iconPosition6]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.maskIcon10, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.maskIcon11, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.oval5Icon, styles.groupIconLayout]}
          resizeMode="cover"
          source={require("../assets/oval-5.png")}
        />
        <Image
          style={styles.oval4Icon}
          resizeMode="cover"
          source={require("../assets/oval-4.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <Image
          style={[styles.rectangleIcon3, styles.rectangleLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle3.png")}
        />
        <Text style={[styles.bitcoinChart, styles.bitcoinChartLayout]}>
          Bitcoin Chart
        </Text>
        <Text style={[styles.k, styles.kTypo]}>15k</Text>
        <Text style={[styles.k1, styles.kTypo]}>20k</Text>
        <Text style={[styles.k2, styles.kTypo]}>10k</Text>
        <Text style={[styles.k3, styles.kTypo]}>5k</Text>
        <Text style={[styles.k4, styles.kTypo]}>0k</Text>
        <Text style={[styles.oct, styles.octTypo]}>1 oct</Text>
        <Text style={[styles.nov, styles.octTypo]}>1 nov</Text>
        <Image
          style={[styles.groupChild2, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.groupChild6, styles.groupChildLayout1]}
          resizeMode="cover"
          source={require("../assets/rectangle-8.png")}
        />
        <Image
          style={[styles.groupChild7, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={[styles.groupChild8, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={styles.path4Icon}
          resizeMode="cover"
          source={require("../assets/path-4.png")}
        />
        <Text style={[styles.dec, styles.octTypo]}>1 dec</Text>
        <Image
          style={[styles.groupChild9, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={[styles.groupChild10, styles.satoshis1Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-13.png")}
        />
        <Text style={[styles.m, styles.mTypo]}>1m</Text>
        <Text style={[styles.m1, styles.mTypo]}>3m</Text>
        <Text style={[styles.all1, styles.allTypo]}>All</Text>
        <Image
          style={[styles.mask21Icon, styles.iconPosition5]}
          resizeMode="cover"
          source={require("../assets/mask-15.png")}
        />
        <Image
          style={[styles.maskIcon12, styles.iconPosition5]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.maskIcon13, styles.iconPosition5]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
        <Image
          style={[styles.maskIcon14, styles.iconPosition5]}
          resizeMode="cover"
          source={require("../assets/mask.png")}
        />
      </View>
      <View style={styles.hiJordanParent}>
        <Text style={[styles.hiJordan, styles.textTypo4]}>Hi Jordan!</Text>
        <Text style={[styles.viewMore, styles.textTypo4]}>View more</Text>
        <Image
          style={[styles.mask2Icon, styles.maskIconLayout]}
          resizeMode="cover"
          source={require("../assets/mask-15.png")}
        />
        <View style={[styles.groupWrapper, styles.groupContainerLayout]}>
          <View style={[styles.groupContainer, styles.groupContainerLayout]}>
            <View style={[styles.groupContainer, styles.groupContainerLayout]}>
              <Image
                style={[styles.groupContainer, styles.groupContainerLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-19.png")}
              />
              <View
                style={[styles.groupContainer, styles.groupContainerLayout]}
              >
                <View style={[styles.parent, styles.parentPosition2]}>
                  <Image
                    style={[styles.icon, styles.iconPosition4]}
                    resizeMode="cover"
                    source={require("../assets/248.png")}
                  />
                  <Text style={[styles.medals, styles.textLayout2]}>
                    Medals
                  </Text>
                  <Text style={[styles.text4, styles.textTypo3]}>5</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.mask29Icon}
          resizeMode="cover"
          source={require("../assets/mask-29.png")}
        />
        <View style={[styles.vectorGroup, styles.groupLayout3]}>
          <Image
            style={[styles.groupChild12, styles.groupLayout3]}
            resizeMode="cover"
            source={require("../assets/rectangle-179.png")}
          />
          <Text style={[styles.balance, styles.parentPosition2]}>Balance</Text>
          <Text style={[styles.wallet, styles.textTypo2]}>Wallet</Text>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <View style={[styles.group, styles.groupParentLayout]}>
              <Text style={[styles.text5, styles.textTypo2]}>+14%</Text>
              <Text style={[styles.btc, styles.btcLayout]}>BTC</Text>
              <Text style={[styles.text6, styles.textTypo2]}>0.22174612</Text>
            </View>
            <View style={[styles.stonkParent, styles.groupParentLayout]}>
              <Text style={[styles.btc, styles.btcLayout]}>Stonk$</Text>
              <Text style={[styles.text7, styles.textTypo2]}>1000</Text>
            </View>
          </View>
        </View>
        <View style={[styles.vectorContainer, styles.groupContainerLayout]}>
          <Image
            style={[styles.groupContainer, styles.groupContainerLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-19.png")}
          />
          <Text style={[styles.games, styles.textLayout2]}>Games</Text>
          <Text style={[styles.text8, styles.textTypo3]}>45</Text>
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/25503.png")}
          />
        </View>
      </View>
      <View style={styles.myLeaguesParent}>
        <Text style={[styles.myLeagues, styles.btcLayout]}>My Leagues</Text>
        <Image
          style={styles.rectangleIcon4}
          resizeMode="cover"
          source={require("../assets/rectangle4.png")}
        />
        <View style={styles.ddLeagueParent}>
          <Text
            style={[styles.ddLeague, styles.textTypo4]}
          >{` Аdd League `}</Text>
          <Image
            style={[styles.bitmapIcon5, styles.bitmapIconPosition]}
            resizeMode="cover"
            source={require("../assets/bitmap4.png")}
          />
          <Image
            style={[styles.bitmapIcon6, styles.bitmapIconPosition]}
            resizeMode="cover"
            source={require("../assets/bitmap5.png")}
          />
          <Text style={[styles.ethLeaders, styles.ethLeadersTypo]}>
            Eth Leaders
          </Text>
          <Text style={[styles.ltcDreamers, styles.ethLeadersTypo]}>
            LTC Dreamers
          </Text>
        </View>
      </View>
      <View style={styles.todaysGamesWrapper}>
        <Text style={[styles.todaysGames, styles.btcLayout]}>
          Today’s Games
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout2]}>
        <View style={[styles.groupParent1, styles.groupLayout2]}>
          <View style={styles.vectorParent1}>
            <Image
              style={styles.vectorParent1}
              resizeMode="cover"
              source={require("../assets/rectangle-182.png")}
            />
            <Image
              style={[styles.groupChild15, styles.vectorIcon2Layout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1181.png")}
            />
            <Text style={styles.text9}>$24524</Text>
            <Image
              style={styles.groupChild16}
              resizeMode="cover"
              source={require("../assets/group-11392.png")}
            />
            <Text style={[styles.underOrOverContainer, styles.satoshisLayout]}>
              <Text style={styles.under}>Under</Text>
              <Text style={styles.text10}>{` `}</Text>
              <Text style={styles.under}>or</Text>
              <Text style={styles.text10}>{` `}</Text>
              <Text style={styles.under}>Over</Text>
            </Text>
            <Text style={[styles.shifuPredictsBitcoins, styles.textTypo4]}>
              Shifu predicts Bitcoin’s value will reach
            </Text>
          </View>
          <View style={[styles.groupWrapper1, styles.groupWrapperLayout3]}>
            <View style={[styles.groupWrapper2, styles.groupWrapperLayout3]}>
              <View style={[styles.groupWrapper2, styles.groupWrapperLayout3]}>
                <View style={styles.vectorParent2}>
                  <Image
                    style={styles.groupChild17}
                    resizeMode="cover"
                    source={require("../assets/rectangle-191.png")}
                  />
                  <Image
                    style={[styles.groupChild18, styles.groupChildPosition]}
                    resizeMode="cover"
                    source={require("../assets/group-12254.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.iconPosition4]}
                    resizeMode="cover"
                    source={require("../assets/vector-8.png")}
                  />
                  <View style={[styles.groupWrapper3, styles.groupLayout1]}>
                    <View style={[styles.groupParent3, styles.groupLayout1]}>
                      <View
                        style={[
                          styles.groupParent4,
                          styles.groupParentPosition,
                        ]}
                      >
                        <View
                          style={[
                            styles.groupWrapper4,
                            styles.groupWrapperLayout2,
                          ]}
                        >
                          <View
                            style={[
                              styles.groupWrapper4,
                              styles.groupWrapperLayout2,
                            ]}
                          >
                            <Image
                              style={[
                                styles.groupWrapper4,
                                styles.groupWrapperLayout2,
                              ]}
                              resizeMode="cover"
                              source={require("../assets/rectangle-186.png")}
                            />
                            <View
                              style={[styles.fill5Parent, styles.parentLayout3]}
                            >
                              <Image
                                style={[styles.fill5Icon, styles.iconLayout3]}
                                resizeMode="cover"
                                source={require("../assets/fill-5.png")}
                              />
                              <Text style={[styles.under1, styles.textLayout2]}>
                                Under
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={[
                            styles.groupWrapper5,
                            styles.groupWrapperLayout2,
                          ]}
                        >
                          <View
                            style={[
                              styles.groupWrapper4,
                              styles.groupWrapperLayout2,
                            ]}
                          >
                            <Image
                              style={[
                                styles.groupWrapper4,
                                styles.groupWrapperLayout2,
                              ]}
                              resizeMode="cover"
                              source={require("../assets/rectangle-186.png")}
                            />
                            <View
                              style={[styles.fill6Parent, styles.parentLayout3]}
                            >
                              <Image
                                style={[styles.fill6Icon, styles.iconLayout3]}
                                resizeMode="cover"
                                source={require("../assets/fill-6.png")}
                              />
                              <Text style={[styles.under1, styles.textLayout2]}>
                                Over
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <Text
                        style={[styles.placeYourBet, styles.bitcoinChartLayout]}
                      >
                        Place your bet
                      </Text>
                    </View>
                  </View>
                </View>
                <Image
                  style={styles.groupChild21}
                  resizeMode="cover"
                  source={require("../assets/vector-8.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.groupParent5}>
          <View style={styles.groupParent6}>
            <Image
              style={styles.groupChild22}
              resizeMode="cover"
              source={require("../assets/group-11407.png")}
            />
            <View style={styles.groupParent7}>
              <View style={styles.groupWrapper6}>
                <View style={styles.groupWrapper6}>
                  <View style={styles.groupWrapper6}>
                    <Text style={[styles.choseUnder, styles.textTypo4]}>
                      232 chose under
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.groupWrapper8, styles.groupWrapperLayout1]}>
                <View
                  style={[styles.groupWrapper9, styles.groupWrapperLayout1]}
                >
                  <View
                    style={[styles.groupWrapper9, styles.groupWrapperLayout1]}
                  >
                    <Text style={[styles.choseOver, styles.choseOverTypo]}>
                      123 chose over
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.groupParent8, styles.parentPosition1]}>
            <View style={[styles.excludeParent, styles.parentLayout2]}>
              <Image
                style={styles.excludeIcon}
                resizeMode="cover"
                source={require("../assets/exclude.png")}
              />
              <View
                style={[
                  styles.iconfontAwesomeFreesolidcParent,
                  styles.parentLayout2,
                ]}
              >
                <Image
                  style={styles.iconfontAwesomeFreesolidc1}
                  resizeMode="cover"
                  source={require("../assets/iconfont-awesome-freesolidcchevrondown.png")}
                />
                <View style={[styles.viewChartParent, styles.parentPosition1]}>
                  <Text style={[styles.viewChart, styles.textLayout2]}>
                    View chart
                  </Text>
                  <Image
                    style={[
                      styles.iconfontAwesomeFreesolidc2,
                      styles.parentPosition1,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/iconfont-awesome-freesolidcchartarea.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.groupWrapper10, styles.groupWrapperLayout]}>
              <View style={[styles.groupWrapper11, styles.groupWrapperLayout]}>
                <View
                  style={[styles.groupWrapper11, styles.groupWrapperLayout]}
                >
                  <Text style={[styles.text12, styles.textLayout2]}>355</Text>
                  <Image
                    style={styles.vectorIcon1}
                    resizeMode="cover"
                    source={require("../assets/vector.png")}
                  />
                  <Image
                    style={[styles.vectorIcon2, styles.vectorIcon2Layout]}
                    resizeMode="cover"
                    source={require("../assets/vector1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.prizePoolParent, styles.parentLayout3]}>
        <Text style={[styles.prizePool, styles.choseOverTypo]}>Prize Pool</Text>
        <Text style={[styles.text13, styles.textTypo3]}>$12,000</Text>
      </View>
      <View style={[styles.screen2Inner1, styles.screen2Inner1Layout]}>
        <View style={[styles.groupWrapper12, styles.screen2Inner1Layout]}>
          <View style={[styles.groupWrapper12, styles.screen2Inner1Layout]}>
            <Image
              style={styles.iconsolidclock}
              resizeMode="cover"
              source={require("../assets/iconsolidclock.png")}
            />
            <Text style={[styles.text14, styles.textLayout2]}>03:23:12</Text>
            <Text style={[styles.startsIn, styles.textLayout2]}>Starts in</Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.screen2Icon, styles.screen2Position]}
        resizeMode="cover"
        source={require("../assets/rectangle-190.png")}
      />
      <View style={[styles.groupParent9, styles.groupLayout]}>
        <Image
          style={[styles.groupChild23, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-11388.png")}
        />
        <View style={styles.groupParent10}>
          <View style={[styles.vectorParent5, styles.groupParentPosition]}>
            <Image
              style={[styles.groupChild24, styles.groupParentPosition]}
              resizeMode="cover"
              source={require("../assets/rectangle-1861.png")}
            />
            <Text style={[styles.submitMyPrediction, styles.textTypo]}>
              Submit my prediction
            </Text>
          </View>
          <View
            style={[
              styles.yourPredictionIsUnderWrapper,
              styles.parentPosition1,
            ]}
          >
            <Text style={[styles.yourPredictionIs, styles.textTypo]}>
              Your Prediction is Under
            </Text>
          </View>
          <View style={[styles.groupWrapper13, styles.groupWrapper13Layout]}>
            <View
              style={[styles.entryTicketsParent, styles.groupWrapper13Layout]}
            >
              <Text style={[styles.entryTickets, styles.textTypo]}>
                Entry tickets
              </Text>
              <View style={[styles.vectorParent6, styles.parentLayout1]}>
                <Image
                  style={[styles.groupChild25, styles.groupChildPosition]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1217.png")}
                />
                <View style={[styles.groupWrapper14, styles.parentLayout1]}>
                  <View style={[styles.parent1, styles.parentLayout1]}>
                    <Text style={[styles.text15, styles.textTypo]}>14</Text>
                    <Image
                      style={[styles.icon2, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require("../assets/15.png")}
                    />
                    <Image
                      style={[styles.icon3, styles.iconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/151.png")}
                    />
                    <Image
                      style={[styles.icon4, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/16.png")}
                    />
                    <Image
                      style={[styles.excludeIcon1, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/exclude1.png")}
                    />
                    <Image
                      style={[styles.icon5, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/17.png")}
                    />
                    <Image
                      style={[styles.icon6, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/171.png")}
                    />
                    <Image
                      style={[styles.icon7, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require("../assets/13.png")}
                    />
                    <Image
                      style={[styles.icon8, styles.iconPosition1]}
                      resizeMode="cover"
                      source={require("../assets/131.png")}
                    />
                    <Image
                      style={[styles.icon9, styles.iconPosition]}
                      resizeMode="cover"
                      source={require("../assets/12.png")}
                    />
                    <Image
                      style={[styles.icon10, styles.iconPosition]}
                      resizeMode="cover"
                      source={require("../assets/121.png")}
                    />
                    <Image
                      style={[styles.icon11, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/17.png")}
                    />
                    <Image
                      style={[styles.icon12, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/11.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.groupParent11, styles.parentPosition]}>
                <View style={[styles.parent2, styles.parentPosition]}>
                  <Text style={[styles.text16, styles.textTypo]}>$2000</Text>
                  <Text style={[styles.youCanWinContainer, styles.totalTypo]}>
                    <Text style={styles.youCanWin}>You can win</Text>
                    <Text style={styles.text17}>{` `}</Text>
                  </Text>
                </View>
                <View style={[styles.totalParent, styles.parentLayout]}>
                  <Text style={[styles.total, styles.totalTypo]}>Total</Text>
                  <View style={[styles.parent3, styles.parentLayout]}>
                    <Text style={[styles.text18, styles.textTypo]}>5</Text>
                    <Image
                      style={styles.icon13}
                      resizeMode="cover"
                      source={require("../assets/25498.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.homeIndicatorLight, styles.screen2Position]}
        resizeMode="cover"
        source={require("../assets/home-indicator--light.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen2Position: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  ovalLayout: {
    width: 16,
    height: 16,
    position: "absolute",
  },
  allTypo: {
    fontFamily: FontFamily.helveticaRegular,
    textAlign: "left",
    position: "absolute",
  },
  mTypo: {
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  bitmapIconLayout: {
    height: 26,
    position: "absolute",
  },
  bitmapIconPosition1: {
    top: 2229,
    height: 26,
    position: "absolute",
  },
  homeTypo: {
    top: 2259,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout2: {
    height: 334,
    width: 311,
    position: "absolute",
  },
  pastGamesLayout: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  wonTypo: {
    left: 207,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  wonPosition: {
    top: 23,
    color: Color.dimgray_100,
    lineHeight: 15,
    fontSize: FontSize.size_2xs,
  },
  groupLayout4: {
    height: 72,
    width: 271,
    left: 20,
    position: "absolute",
  },
  decTypo: {
    fontSize: FontSize.size_3xs,
    color: Color.darkslategray_300,
    lineHeight: 13,
  },
  pick5Typo: {
    color: Color.darkslategray_200,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout4: {
    height: 8,
    width: 12,
    position: "absolute",
  },
  maskIconPosition1: {
    left: 204,
    height: 8,
    width: 12,
    position: "absolute",
  },
  satoshis1Position: {
    left: 213,
    position: "absolute",
  },
  dec20182Typo: {
    top: 241,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout1: {
    height: 219,
    width: 310,
    position: "absolute",
  },
  bitcoinChartTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  pick51Typo: {
    top: 81,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  textTypo5: {
    color: Color.gray,
    lineHeight: 28,
    left: 81,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.helveticaRegular,
    position: "absolute",
  },
  groupIconLayout: {
    height: 27,
    width: 27,
    left: 21,
    position: "absolute",
  },
  maskIconLayout: {
    width: 4,
    position: "absolute",
  },
  iconPosition6: {
    top: 179,
    width: 4,
    left: 289,
    position: "absolute",
  },
  rectangleLayout: {
    height: 302,
    width: 310,
    position: "absolute",
  },
  bitcoinChartLayout: {
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  kTypo: {
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    color: Color.dimgray_100,
    textAlign: "left",
    fontFamily: FontFamily.helveticaRegular,
    position: "absolute",
  },
  octTypo: {
    top: 266,
    lineHeight: 12,
    fontSize: FontSize.size_3xs,
    color: Color.dimgray_100,
    textAlign: "left",
    fontFamily: FontFamily.helveticaRegular,
    position: "absolute",
  },
  groupChildLayout1: {
    width: 247,
    left: 44,
    height: 1,
    position: "absolute",
  },
  groupChildLayout: {
    width: 1,
    top: 239,
    height: 4,
    position: "absolute",
  },
  iconPosition5: {
    left: 288,
    width: 4,
    position: "absolute",
  },
  textTypo4: {
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
  },
  groupContainerLayout: {
    width: 164,
    height: 100,
    position: "absolute",
  },
  parentPosition2: {
    top: 16,
    left: 16,
    position: "absolute",
  },
  iconPosition4: {
    opacity: 0.3,
    top: 0,
    position: "absolute",
  },
  textLayout2: {
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  textTypo3: {
    color: Color.goldenrod,
    fontFamily: FontFamily.avenirNextBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  groupLayout3: {
    height: 122,
    width: 343,
    left: 0,
    position: "absolute",
  },
  textTypo2: {
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  groupParentLayout: {
    height: 52,
    position: "absolute",
  },
  btcLayout: {
    lineHeight: 22,
    textAlign: "left",
    position: "absolute",
  },
  bitmapIconPosition: {
    top: 33,
    position: "absolute",
  },
  ethLeadersTypo: {
    top: 105,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  groupLayout2: {
    height: 455,
    width: 343,
    position: "absolute",
  },
  vectorIcon2Layout: {
    height: 5,
    position: "absolute",
  },
  satoshisLayout: {
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  groupWrapperLayout3: {
    height: 303,
    width: 342,
    position: "absolute",
  },
  groupChildPosition: {
    opacity: 0.1,
    position: "absolute",
  },
  groupLayout1: {
    height: 118,
    width: 313,
    position: "absolute",
  },
  groupParentPosition: {
    height: 40,
    left: 0,
    position: "absolute",
  },
  groupWrapperLayout2: {
    width: 148,
    height: 40,
    top: 0,
    position: "absolute",
  },
  parentLayout3: {
    height: 19,
    position: "absolute",
  },
  iconLayout3: {
    height: 11,
    width: 10,
    left: 0,
    position: "absolute",
  },
  groupWrapperLayout1: {
    width: 85,
    height: 16,
    top: 0,
    position: "absolute",
  },
  choseOverTypo: {
    textAlign: "right",
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
  },
  parentPosition1: {
    height: 20,
    left: 0,
    position: "absolute",
  },
  parentLayout2: {
    width: 115,
    height: 20,
    top: 0,
    position: "absolute",
  },
  groupWrapperLayout: {
    width: 46,
    height: 19,
    left: 0,
    position: "absolute",
  },
  screen2Inner1Layout: {
    width: 134,
    height: 19,
    position: "absolute",
  },
  groupLayout: {
    height: 468,
    width: 375,
    left: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  groupWrapper13Layout: {
    height: 255,
    width: 343,
    left: 0,
    position: "absolute",
  },
  parentLayout1: {
    height: 163,
    position: "absolute",
  },
  iconLayout2: {
    opacity: 0.7,
    height: 15,
    position: "absolute",
  },
  iconPosition1: {
    left: 11,
    width: 13,
  },
  iconLayout1: {
    opacity: 0.4,
    height: 12,
  },
  iconLayout: {
    opacity: 0.2,
    height: 7,
    position: "absolute",
  },
  iconPosition: {
    top: 17,
    opacity: 0.4,
    height: 12,
    position: "absolute",
  },
  parentPosition: {
    height: 37,
    left: 0,
    position: "absolute",
  },
  totalTypo: {
    fontFamily: FontFamily.montserratMedium,
    lineHeight: 15,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 18,
    position: "absolute",
  },
  screen2Icon: {
    top: 0,
    height: 812,
  },
  screen2Child: {
    height: 392,
    top: 0,
  },
  iconfontAwesomeFreesolidc: {
    top: -351,
    left: 330,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  ovalIcon: {
    height: 16,
    left: 0,
    top: 0,
  },
  text: {
    textAlign: "left",
    color: Color.white,
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.helveticaRegular,
    left: 5,
    top: 2,
  },
  ovalParent: {
    top: -360,
    left: 343,
    height: 16,
  },
  screen2Item: {
    top: 2218,
    height: 62,
  },
  screen2Inner: {
    top: -354,
    height: 30,
    width: 26,
    left: 16,
    position: "absolute",
  },
  research: {
    left: 155,
    color: Color.darkgray_100,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 2258,
    fontWeight: "500",
    position: "absolute",
  },
  bitmapIcon: {
    top: 2231,
    width: 42,
    left: 159,
  },
  leagues: {
    left: 85,
    color: Color.darkgray_100,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    top: 2258,
    fontWeight: "500",
    position: "absolute",
  },
  bitmapIcon1: {
    top: 2228,
    left: 91,
    width: 31,
    height: 31,
    position: "absolute",
  },
  bitmapIcon2: {
    left: 251,
    width: 26,
  },
  bitmapIcon3: {
    left: 13,
    width: 49,
  },
  home: {
    color: "#544f4f",
    left: 21,
  },
  leaderboard: {
    left: 229,
    color: Color.darkgray_100,
  },
  profile: {
    left: 320,
    color: Color.darkgray_100,
  },
  bitmapIcon4: {
    top: 2232,
    left: 325,
    width: 26,
  },
  rectangleIcon: {
    top: 1125,
    height: 165,
    width: 311,
    left: 32,
    position: "absolute",
  },
  rectangleIcon1: {
    left: 0,
    top: 0,
  },
  pastGames: {
    top: 21,
    color: Color.darkslategray_300,
    left: 19,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  all: {
    left: 178,
    color: Color.darkgray_200,
    top: 22,
    textAlign: "left",
    lineHeight: 13,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.helveticaRegular,
  },
  won: {
    color: Color.dimgray_100,
    lineHeight: 15,
    top: 23,
    fontSize: FontSize.size_2xs,
  },
  lost: {
    left: 256,
    color: Color.dimgray_100,
    lineHeight: 15,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  groupChild: {
    top: 66,
  },
  dec2018: {
    left: 33,
    top: 81,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  satoshis: {
    top: 79,
    color: Color.darkgray_200,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  pick5: {
    top: 112,
    left: 33,
  },
  mask9Icon: {
    left: 194,
    height: 8,
    top: 82,
  },
  maskIcon: {
    top: 80,
  },
  groupItem: {
    top: 146,
  },
  dec20181: {
    top: 161,
    left: 33,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  satoshis1: {
    top: 159,
    color: Color.darkgray_200,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  upOrDown: {
    top: 192,
    left: 33,
  },
  mask11Icon: {
    top: 162,
    left: 195,
  },
  maskIcon1: {
    left: 205,
    top: 172,
  },
  groupInner: {
    top: 226,
  },
  satoshis2: {
    left: 214,
    color: Color.darkgray_200,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  mask13Icon: {
    top: 244,
    left: 194,
    height: 8,
  },
  maskIcon2: {
    top: 254,
  },
  dec20182: {
    left: 34,
    fontSize: FontSize.size_3xs,
    color: Color.darkslategray_300,
    lineHeight: 13,
  },
  bestOf5: {
    top: 272,
    left: 33,
  },
  seeMore: {
    top: 309,
    left: 123,
  },
  rectangleParent: {
    top: 1246,
    left: 32,
    height: 334,
  },
  rectangleIcon2: {
    left: 0,
    top: 0,
  },
  myStonkPerformance: {
    top: 20,
    lineHeight: 21,
    fontSize: FontSize.size_base,
    position: "absolute",
    left: 21,
  },
  pick51: {
    left: 197,
    color: Color.dimgray_100,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
  },
  upOrDown1: {
    left: 176,
    top: 129,
    color: Color.dimgray_100,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  head2Head: {
    top: 181,
    left: 172,
    color: Color.dimgray_100,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text1: {
    top: 71,
  },
  text2: {
    top: 120,
  },
  text3: {
    top: 172,
  },
  groupIcon: {
    top: 75,
  },
  groupChild1: {
    top: 124,
  },
  mask15Icon: {
    left: 289,
    width: 4,
    top: 80,
    height: 16,
  },
  maskIcon3: {
    height: 4,
    left: 289,
    width: 4,
    top: 80,
  },
  maskIcon4: {
    top: 86,
    height: 4,
    left: 289,
    width: 4,
  },
  maskIcon5: {
    top: 92,
    height: 4,
    left: 289,
    width: 4,
  },
  mask17Icon: {
    left: 289,
    width: 4,
    top: 129,
    height: 16,
  },
  maskIcon6: {
    height: 4,
    left: 289,
    width: 4,
    top: 129,
  },
  maskIcon7: {
    top: 135,
    height: 4,
    left: 289,
    width: 4,
  },
  maskIcon8: {
    top: 141,
    height: 4,
    left: 289,
    width: 4,
  },
  mask19Icon: {
    height: 16,
  },
  maskIcon9: {
    height: 4,
  },
  maskIcon10: {
    top: 185,
    height: 4,
    left: 289,
    width: 4,
  },
  maskIcon11: {
    top: 191,
    height: 4,
    left: 289,
    width: 4,
  },
  oval5Icon: {
    top: 171,
  },
  oval4Icon: {
    top: 198,
    left: 43,
    width: 10,
    height: 4,
    position: "absolute",
  },
  rectangleGroup: {
    top: 1003,
    left: 33,
  },
  rectangleIcon3: {
    left: 0,
    top: 0,
  },
  bitcoinChart: {
    top: 25,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.futuraMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 16,
  },
  k: {
    top: 119,
    left: 18,
    lineHeight: 12,
  },
  k1: {
    top: 82,
    left: 19,
  },
  k2: {
    top: 156,
    left: 18,
    lineHeight: 12,
  },
  k3: {
    top: 195,
    left: 20,
  },
  k4: {
    top: 232,
    left: 20,
  },
  oct: {
    left: 65,
  },
  nov: {
    left: 163,
  },
  groupChild2: {
    top: 88,
    height: 1,
  },
  groupChild3: {
    top: 126,
    height: 1,
  },
  groupChild4: {
    top: 163,
    height: 1,
  },
  groupChild5: {
    top: 201,
    height: 1,
  },
  groupChild6: {
    top: 238,
    height: 1,
  },
  groupChild7: {
    left: 72,
  },
  groupChild8: {
    left: 173,
  },
  path4Icon: {
    top: 115,
    left: 51,
    width: 226,
    height: 107,
    position: "absolute",
  },
  dec: {
    left: 254,
  },
  groupChild9: {
    left: 274,
  },
  groupChild10: {
    width: 37,
    height: 23,
    top: 26,
  },
  m: {
    left: 189,
    top: 30,
    color: Color.dimgray_100,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  m1: {
    left: 222,
    top: 30,
    color: Color.darkslategray_300,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  all1: {
    left: 258,
    lineHeight: 14,
    top: 30,
    color: Color.dimgray_100,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  mask21Icon: {
    top: 30,
    height: 16,
  },
  maskIcon12: {
    top: 30,
    height: 4,
  },
  maskIcon13: {
    top: 36,
    height: 4,
  },
  maskIcon14: {
    top: 42,
    height: 4,
  },
  rectangleContainer: {
    top: 1599,
    left: 33,
  },
  hiJordan: {
    lineHeight: 22,
    textAlign: "left",
    position: "absolute",
    top: 22,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_base,
    left: 0,
  },
  viewMore: {
    left: 285,
    color: Color.slategray,
    top: 26,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  mask2Icon: {
    left: 323,
    height: 16,
    top: 0,
  },
  groupContainer: {
    height: 100,
    left: 0,
    top: 0,
  },
  icon: {
    left: 66,
    width: 111,
    height: 111,
  },
  medals: {
    color: Color.silver,
    top: 48,
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  text4: {
    lineHeight: 46,
    fontSize: FontSize.size_15xl,
    color: Color.goldenrod,
    left: 1,
    top: 2,
  },
  parent: {
    width: 177,
    height: 111,
  },
  groupWrapper: {
    left: 179,
    height: 100,
    top: 56,
    width: 164,
  },
  mask29Icon: {
    top: 217,
    left: 260,
    width: 18,
    height: 12,
    position: "absolute",
  },
  groupChild12: {
    top: 0,
  },
  balance: {
    lineHeight: 30,
    fontFamily: FontFamily.avenirNextRegular,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  wallet: {
    left: 286,
    color: Color.dodgerblue,
    top: 19,
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
  },
  text5: {
    color: "#59aa00",
    textTransform: "uppercase",
    fontFamily: FontFamily.avenirNextRegular,
    top: 26,
    left: 85,
  },
  btc: {
    textTransform: "uppercase",
    fontFamily: FontFamily.avenirNextRegular,
    color: Color.slategray,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  text6: {
    textTransform: "uppercase",
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
    top: 26,
    color: Color.darkslategray_300,
    left: 0,
  },
  group: {
    width: 123,
    left: 0,
    top: 0,
  },
  text7: {
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
    top: 26,
    color: Color.darkslategray_300,
    left: 0,
  },
  stonkParent: {
    left: 165,
    width: 49,
    top: 0,
  },
  groupParent: {
    top: 54,
    width: 214,
    left: 16,
  },
  vectorGroup: {
    top: 172,
  },
  games: {
    top: 64,
    color: Color.silver,
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
    left: 16,
    textAlign: "left",
    position: "absolute",
  },
  text8: {
    top: 18,
    left: 17,
    lineHeight: 46,
    fontSize: FontSize.size_15xl,
    color: Color.goldenrod,
  },
  icon1: {
    left: 103,
    width: 77,
    height: 77,
    top: 35,
    position: "absolute",
  },
  vectorContainer: {
    height: 100,
    top: 56,
    width: 164,
    left: 0,
  },
  hiJordanParent: {
    top: -301,
    width: 344,
    height: 294,
    left: 16,
    position: "absolute",
  },
  myLeagues: {
    color: "#4a4a4a",
    fontFamily: FontFamily.avenirNextRegular,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  rectangleIcon4: {
    top: 37,
    left: 237,
    width: 149,
    height: 99,
    position: "absolute",
  },
  ddLeague: {
    left: 241,
    color: Color.darkslategray_300,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  bitmapIcon5: {
    width: 200,
    height: 99,
    left: 0,
  },
  bitmapIcon6: {
    left: 210,
    width: 170,
    height: 100,
  },
  ethLeaders: {
    color: "#e6e6e6",
    left: 222,
  },
  ltcDreamers: {
    left: 6,
    color: "#f3f4f6",
  },
  ddLeagueParent: {
    width: 380,
    height: 133,
    top: 3,
    left: 0,
    position: "absolute",
  },
  myLeaguesParent: {
    top: 842,
    left: 29,
    width: 386,
    height: 136,
    position: "absolute",
  },
  todaysGames: {
    fontFamily: FontFamily.avenirNextRegular,
    color: Color.slategray,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  todaysGamesWrapper: {
    height: 22,
    width: 111,
    top: 30,
    left: 16,
    position: "absolute",
  },
  vectorParent1: {
    height: 453,
    width: 343,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild15: {
    width: 243,
    top: 1,
    left: 1,
  },
  text9: {
    top: 96,
    fontFamily: FontFamily.avenirNextBold,
    fontWeight: "700",
    lineHeight: 27,
    fontSize: FontSize.size_xl,
    left: 20,
    color: Color.darkslategray_300,
    textAlign: "left",
    position: "absolute",
  },
  groupChild16: {
    top: 8,
    left: 301,
    width: 52,
    opacity: 0.15,
    height: 36,
    position: "absolute",
  },
  under: {
    color: Color.slategray,
  },
  text10: {
    color: Color.dodgerblue,
  },
  underOrOverContainer: {
    textTransform: "uppercase",
    fontFamily: FontFamily.avenirNextRegular,
    top: 30,
    left: 20,
    textAlign: "left",
    position: "absolute",
  },
  shifuPredictsBitcoins: {
    width: 303,
    lineHeight: 22,
    textAlign: "left",
    position: "absolute",
    left: 20,
    top: 66,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_base,
  },
  groupChild17: {
    height: 174,
    width: 341,
    top: 1,
    left: 0,
    position: "absolute",
  },
  groupChild18: {
    height: 178,
    width: 341,
    left: 1,
    top: 0,
  },
  vectorIcon: {
    width: 341,
    height: 1,
    left: 0,
  },
  groupWrapper4: {
    left: 0,
  },
  fill5Icon: {
    top: 4,
  },
  under1: {
    left: 15,
    color: Color.dodgerblue,
    fontFamily: FontFamily.avenirNextRegular,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  fill5Parent: {
    left: 46,
    width: 56,
    top: 11,
  },
  fill6Icon: {
    top: 3,
  },
  fill6Parent: {
    left: 48,
    width: 48,
    top: 11,
  },
  groupWrapper5: {
    left: 165,
  },
  groupParent4: {
    top: 78,
    width: 313,
    height: 40,
  },
  placeYourBet: {
    left: 4,
    textAlign: "center",
    color: Color.aliceblue,
    fontFamily: FontFamily.avenirNextRegular,
    top: 0,
  },
  groupParent3: {
    left: 0,
    top: 0,
  },
  groupWrapper3: {
    top: 29,
    left: 15,
  },
  vectorParent2: {
    top: 125,
    height: 177,
    width: 342,
    left: 0,
    position: "absolute",
  },
  groupChild21: {
    width: 341,
    height: 1,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper2: {
    left: 0,
    top: 0,
  },
  groupWrapper1: {
    top: 152,
    left: 1,
  },
  groupParent1: {
    left: 0,
    top: 0,
  },
  groupChild22: {
    top: 28,
    height: 10,
    width: 303,
    left: 0,
    position: "absolute",
  },
  choseUnder: {
    color: Color.slategray,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper6: {
    width: 93,
    height: 16,
    left: 0,
    top: 0,
    position: "absolute",
  },
  choseOver: {
    color: Color.slategray,
    top: 0,
  },
  groupWrapper9: {
    left: 0,
  },
  groupWrapper8: {
    left: 218,
  },
  groupParent7: {
    width: 303,
    height: 16,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupParent6: {
    height: 38,
    width: 303,
    left: 0,
    top: 0,
    position: "absolute",
  },
  excludeIcon: {
    width: 17,
    height: 13,
  },
  iconfontAwesomeFreesolidc1: {
    left: 100,
    width: 15,
    height: 15,
    top: 3,
    position: "absolute",
    overflow: "hidden",
  },
  viewChart: {
    left: 28,
    top: 1,
    fontFamily: FontFamily.avenirNextRegular,
    color: Color.slategray,
    textAlign: "left",
    position: "absolute",
  },
  iconfontAwesomeFreesolidc2: {
    width: 20,
    top: 0,
    overflow: "hidden",
  },
  viewChartParent: {
    width: 96,
    top: 0,
  },
  iconfontAwesomeFreesolidcParent: {
    left: 0,
  },
  excludeParent: {
    left: 188,
  },
  text12: {
    fontFamily: FontFamily.avenirNextRegular,
    color: Color.slategray,
    left: 20,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  vectorIcon1: {
    left: 3,
    width: 7,
    height: 7,
    top: 3,
    position: "absolute",
  },
  vectorIcon2: {
    top: 11,
    width: 12,
    height: 5,
    left: 0,
  },
  groupWrapper11: {
    top: 0,
  },
  groupWrapper10: {
    top: 1,
  },
  groupParent8: {
    top: 50,
    width: 303,
  },
  groupParent5: {
    top: 180,
    height: 70,
    width: 303,
    left: 20,
    position: "absolute",
  },
  groupView: {
    top: 70,
    left: 16,
  },
  prizePool: {
    color: Color.aliceblue,
    top: 2,
  },
  text13: {
    left: 59,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  prizePoolParent: {
    top: 415,
    left: 36,
    width: 118,
  },
  iconsolidclock: {
    left: 56,
    width: 14,
    height: 14,
    top: 2,
    position: "absolute",
    overflow: "hidden",
  },
  text14: {
    left: 75,
    color: Color.slategray,
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  startsIn: {
    fontFamily: FontFamily.avenirNextRegular,
    color: Color.slategray,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper12: {
    left: 0,
    top: 0,
  },
  screen2Inner1: {
    top: 98,
    left: 205,
  },
  groupChild23: {
    top: 0,
  },
  groupChild24: {
    width: 343,
    top: 0,
  },
  submitMyPrediction: {
    top: 12,
    left: 93,
    lineHeight: 17,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.white,
  },
  vectorParent5: {
    top: 330,
    width: 343,
  },
  yourPredictionIs: {
    lineHeight: 20,
    color: Color.darkslategray_300,
    fontSize: FontSize.size_base,
    left: 0,
    top: 0,
  },
  yourPredictionIsUnderWrapper: {
    width: 201,
    top: 0,
  },
  entryTickets: {
    textTransform: "uppercase",
    color: Color.slategray,
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  groupChild25: {
    top: 63,
    height: 36,
    width: 343,
    left: 0,
  },
  text15: {
    lineHeight: 29,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    top: 66,
    color: Color.darkslategray_300,
    left: 0,
  },
  icon2: {
    width: 6,
    left: 2,
    top: 107,
    opacity: 0.7,
  },
  icon3: {
    width: 13,
    opacity: 0.7,
    height: 15,
    position: "absolute",
    top: 107,
  },
  icon4: {
    top: 134,
    width: 6,
    left: 2,
    position: "absolute",
  },
  excludeIcon1: {
    width: 13,
  },
  icon5: {
    width: 6,
    left: 2,
    top: 156,
  },
  icon6: {
    width: 13,
    left: 11,
    top: 156,
  },
  icon7: {
    width: 6,
    left: 2,
    top: 42,
  },
  icon8: {
    width: 13,
    opacity: 0.7,
    height: 15,
    position: "absolute",
    top: 42,
  },
  icon9: {
    width: 6,
    left: 2,
  },
  icon10: {
    width: 13,
    left: 11,
  },
  icon11: {
    width: 6,
    left: 5,
    top: 0,
  },
  icon12: {
    left: 14,
    width: 6,
    top: 0,
  },
  parent1: {
    width: 26,
    left: 0,
    top: 0,
  },
  groupWrapper14: {
    left: 159,
    width: 26,
    top: 0,
  },
  vectorParent6: {
    top: 35,
    width: 343,
    left: 0,
  },
  text16: {
    color: Color.seagreen,
    lineHeight: 17,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    top: 19,
    left: 0,
  },
  youCanWin: {
    color: Color.silver,
  },
  text17: {
    color: Color.seagreen,
  },
  youCanWinContainer: {
    top: 0,
  },
  parent2: {
    width: 74,
    top: 0,
  },
  total: {
    color: Color.slategray,
    top: 2,
  },
  text18: {
    lineHeight: 17,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_300,
    left: 21,
    top: 0,
  },
  icon13: {
    width: 13,
    height: 13,
    top: 2,
    left: 0,
    position: "absolute",
  },
  parent3: {
    left: 38,
    width: 30,
    top: 0,
  },
  totalParent: {
    left: 275,
    width: 68,
    top: 19,
  },
  groupParent11: {
    top: 218,
    width: 343,
  },
  entryTicketsParent: {
    top: 0,
  },
  groupWrapper13: {
    top: 48,
  },
  groupParent10: {
    top: 44,
    height: 370,
    width: 343,
    left: 16,
    position: "absolute",
  },
  groupParent9: {
    top: 344,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  homeIndicatorLight: {
    top: 778,
    height: 34,
    overflow: "hidden",
  },
  screen2: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Screen2;
