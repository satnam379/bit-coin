import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Screen1 = () => {
  return (
    <View style={[styles.screen1, styles.screen1Bg]}>
      <Image
        style={[styles.screen1Icon, styles.screen1IconPosition]}
        resizeMode="cover"
        source={require("../assets/screen-1.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={styles.tonksParent}>
        <Text style={[styles.tonks, styles.tonksTypo]}>$tonks</Text>
        <Text style={[styles.text, styles.textClr]}>1000</Text>
      </View>
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
        <Text style={styles.text1}>1</Text>
      </View>
      <Image
        style={styles.screen1Child}
        resizeMode="cover"
        source={require("../assets/group-11345.png")}
      />
      <Image
        style={styles.mask29Icon}
        resizeMode="cover"
        source={require("../assets/mask-29.png")}
      />
      <Image
        style={[styles.iconfontAwesomeFreesolidc1, styles.iconfontLayout]}
        resizeMode="cover"
        source={require("../assets/iconfont-awesome-freesolidcchartarea.png")}
      />
      <View style={styles.hiJordanParent}>
        <Text style={[styles.hiJordan, styles.hiJordanTypo]}>Hi Jordan!</Text>
        <View style={styles.groupParent}>
          <View style={[styles.groupWrapper, styles.groupLayout2]}>
            <View style={[styles.groupContainer, styles.groupLayout2]}>
              <View style={[styles.groupContainer, styles.groupLayout2]}>
                <Image
                  style={[styles.groupContainer, styles.groupLayout2]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-19.png")}
                />
                <View style={[styles.groupContainer, styles.groupLayout2]}>
                  <View style={[styles.parent, styles.iconLayout2]}>
                    <Image
                      style={[styles.icon, styles.iconLayout2]}
                      resizeMode="cover"
                      source={require("../assets/248.png")}
                    />
                    <Text style={[styles.medals, styles.textLayout]}>
                      Medals
                    </Text>
                    <Text style={[styles.text2, styles.textTypo]}>5</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.groupContainer, styles.groupLayout2]}>
            <Image
              style={[styles.groupContainer, styles.groupLayout2]}
              resizeMode="cover"
              source={require("../assets/rectangle-19.png")}
            />
            <Text style={[styles.games, styles.textLayout]}>Games</Text>
            <Text style={[styles.text3, styles.textTypo]}>45</Text>
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/25503.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.todaysGames, styles.hiJordanTypo]}>
        Today’s Games
      </Text>
      <Image
        style={[styles.iphoneX11ProLightBas, styles.screen1IconPosition]}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../assets/25498.png")}
      />
      <View style={[styles.groupView, styles.groupViewLayout]}>
        <View style={[styles.vectorContainer, styles.groupViewLayout]}>
          <Image
            style={[styles.vectorContainer, styles.groupViewLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-182.png")}
          />
          <View style={styles.frameParent}>
            <View style={[styles.vectorParent1, styles.groupParentLayout]}>
              <Image
                style={[styles.frameChild, styles.groupParentLayout]}
                resizeMode="cover"
                source={require("../assets/group-12490.png")}
              />
              <View style={[styles.xParent, styles.parentPosition]}>
                <Text style={[styles.x, styles.textLayout]}>3.25x</Text>
                <Text style={[styles.under, styles.underTypo1]}>Under</Text>
              </View>
              <View style={[styles.xGroup, styles.parentPosition]}>
                <Text style={[styles.x1, styles.textLayout]}>1.25x</Text>
                <Text style={[styles.under, styles.underTypo1]}>Over</Text>
              </View>
              <View style={[styles.prizePoolParent, styles.parentPosition]}>
                <Text style={[styles.under, styles.underTypo1]}>
                  Prize Pool
                </Text>
                <Text style={[styles.text4, styles.textLayout]}>$12,000</Text>
              </View>
              <View style={[styles.entryFeesParent, styles.parentPosition]}>
                <Text style={[styles.under, styles.underTypo1]}>
                  Entry Fees
                </Text>
                <View style={[styles.groupWrapper1, styles.groupLayout1]}>
                  <View style={[styles.group, styles.groupLayout1]}>
                    <Text style={[styles.text5, styles.textLayout]}>5</Text>
                    <Image
                      style={[styles.icon3, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/254981.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.groupParent1, styles.groupParentLayout]}>
              <View style={[styles.groupWrapper2, styles.groupWrapperLayout3]}>
                <View
                  style={[styles.groupWrapper2, styles.groupWrapperLayout3]}
                >
                  <Image
                    style={[styles.groupWrapper2, styles.groupWrapperLayout3]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-186.png")}
                  />
                  <View style={[styles.fill5Parent, styles.parentGroupLayout]}>
                    <Image
                      style={[styles.fill5Icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/fill-5.png")}
                    />
                    <Text style={[styles.under1, styles.underTypo]}>Under</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.groupWrapper3, styles.groupWrapperLayout3]}>
                <View
                  style={[styles.groupWrapper2, styles.groupWrapperLayout3]}
                >
                  <Image
                    style={[styles.groupWrapper2, styles.groupWrapperLayout3]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-1861.png")}
                  />
                  <View style={[styles.fill6Parent, styles.parentGroupLayout]}>
                    <Image
                      style={[styles.fill6Icon, styles.iconPosition]}
                      resizeMode="cover"
                      source={require("../assets/fill-6.png")}
                    />
                    <Text style={[styles.under1, styles.underTypo]}>Over</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={[styles.whatsYourPrediction, styles.underTypo]}>
              What’s your prediction?
            </Text>
          </View>
          <View style={[styles.component1, styles.component1Layout]}>
            <Image
              style={[styles.component1Icon, styles.component1Layout]}
              resizeMode="cover"
              source={require("../assets/component-1.png")}
            />
            <Image
              style={[styles.component1Icon, styles.component1Layout]}
              resizeMode="cover"
              source={require("../assets/group-12376.png")}
            />
            <View style={styles.groupParent2}>
              <View style={[styles.groupParent3, styles.parentGroupLayout]}>
                <View style={[styles.groupWrapper4, styles.parentGroupLayout]}>
                  <View
                    style={[styles.groupWrapper5, styles.parentGroupLayout]}
                  >
                    <View
                      style={[styles.groupWrapper5, styles.parentGroupLayout]}
                    >
                      <Image
                        style={[styles.iconsolidclock, styles.iconPosition]}
                        resizeMode="cover"
                        source={require("../assets/iconsolidclock.png")}
                      />
                      <Text style={[styles.text6, styles.text6Typo]}>
                        03:23:12
                      </Text>
                      <Text style={[styles.startingIn, styles.underTypo1]}>
                        Starting in
                      </Text>
                    </View>
                  </View>
                </View>
                <Text style={[styles.underOrOver, styles.underTypo]}>
                  Under or Over
                </Text>
              </View>
              <View
                style={[
                  styles.bitcoinPriceWillBeUnder2Wrapper,
                  styles.bitcoinPosition,
                ]}
              >
                <Text
                  style={[
                    styles.bitcoinPriceWillContainer,
                    styles.bitcoinPosition,
                  ]}
                >
                  <Text
                    style={[styles.bitcoinPriceWill, styles.underTypo1]}
                  >{`Bitcoin price will be under
`}</Text>
                  <Text style={styles.at7AEtOn22ndJan21}>
                    <Text style={styles.text7}>{`$24,524 `}</Text>
                    <Text style={styles.underTypo1}>at</Text>
                    <Text style={styles.underTypo}>{` `}</Text>
                    <Text style={styles.underTypo1}>7 a ET on 22nd Jan’21</Text>
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.vectorParent4, styles.groupChild3Layout]}>
          <Image
            style={[styles.groupChild3, styles.groupChild3Layout]}
            resizeMode="cover"
            source={require("../assets/rectangle-192.png")}
          />
          <View style={[styles.groupWrapper6, styles.groupLayout]}>
            <View style={[styles.groupParent4, styles.groupLayout]}>
              <Image
                style={styles.groupIcon}
                resizeMode="cover"
                source={require("../assets/group-11407.png")}
              />
              <View style={[styles.groupParent5, styles.groupPosition]}>
                <View style={[styles.groupWrapper7, styles.groupPosition]}>
                  <View style={[styles.groupWrapper7, styles.groupPosition]}>
                    <View style={[styles.groupWrapper7, styles.groupPosition]}>
                      <Text style={[styles.predictedUnder, styles.underTypo1]}>
                        232 predicted under
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.groupWrapper9, styles.groupWrapperLayout2]}
                >
                  <View
                    style={[styles.groupWrapper10, styles.groupWrapperLayout2]}
                  >
                    <View
                      style={[
                        styles.groupWrapper10,
                        styles.groupWrapperLayout2,
                      ]}
                    >
                      <Text style={[styles.predictedOver, styles.underTypo1]}>
                        123 predicted over
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.groupParent6, styles.iconfontLayout]}>
                <View
                  style={[styles.groupWrapper11, styles.groupWrapperLayout1]}
                >
                  <View
                    style={[styles.groupWrapper12, styles.groupWrapperLayout1]}
                  >
                    <View
                      style={[
                        styles.groupWrapper12,
                        styles.groupWrapperLayout1,
                      ]}
                    >
                      <View
                        style={[styles.excludeParent, styles.parentGroupLayout]}
                      >
                        <Image
                          style={styles.excludeIcon}
                          resizeMode="cover"
                          source={require("../assets/exclude.png")}
                        />
                        <Text style={[styles.viewChart, styles.underTypo]}>
                          View chart
                        </Text>
                      </View>
                      <Image
                        style={[
                          styles.iconfontAwesomeFreesolidc2,
                          styles.iconfontLayout,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/iconfont-awesome-freesolidcchartarea.png")}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.groupWrapper13, styles.groupWrapperLayout]}
                >
                  <View
                    style={[styles.groupWrapper14, styles.groupWrapperLayout]}
                  >
                    <View
                      style={[styles.groupWrapper14, styles.groupWrapperLayout]}
                    >
                      <Text style={[styles.players, styles.underTypo]}>
                        355 Players
                      </Text>
                      <Image
                        style={[styles.vectorIcon, styles.iconPosition]}
                        resizeMode="cover"
                        source={require("../assets/vector.png")}
                      />
                      <Image
                        style={styles.vectorIcon1}
                        resizeMode="cover"
                        source={require("../assets/vector1.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen1Bg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  screen1IconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  tonksTypo: {
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  textClr: {
    color: Color.darkslategray,
    fontFamily: FontFamily.avenirNextRegular,
    position: "absolute",
  },
  ovalLayout: {
    height: 16,
    width: 16,
    position: "absolute",
  },
  iconfontLayout: {
    height: 20,
    position: "absolute",
  },
  hiJordanTypo: {
    lineHeight: 22,
    fontSize: FontSize.size_base,
    color: Color.darkslategray,
    fontFamily: FontFamily.avenirNextRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout2: {
    width: 164,
    height: 100,
    top: 0,
    position: "absolute",
  },
  iconLayout2: {
    height: 111,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  textTypo: {
    color: Color.indigo,
    fontFamily: FontFamily.avenirNextBold,
    lineHeight: 46,
    fontSize: FontSize.size_15xl,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    width: 13,
    height: 13,
    position: "absolute",
  },
  groupViewLayout: {
    height: 389,
    width: 343,
    position: "absolute",
  },
  groupParentLayout: {
    height: 40,
    position: "absolute",
  },
  parentPosition: {
    height: 42,
    top: 0,
    position: "absolute",
  },
  underTypo1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  groupLayout1: {
    height: 19,
    width: 30,
    position: "absolute",
  },
  groupWrapperLayout3: {
    width: 148,
    top: 0,
  },
  parentGroupLayout: {
    height: 18,
    position: "absolute",
  },
  iconLayout: {
    height: 11,
    width: 10,
    left: 0,
  },
  underTypo: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  iconPosition: {
    top: 3,
    position: "absolute",
  },
  component1Layout: {
    height: 104,
    width: 341,
    position: "absolute",
  },
  text6Typo: {
    lineHeight: 17,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  bitcoinPosition: {
    width: 228,
    left: 0,
    position: "absolute",
  },
  groupChild3Layout: {
    height: 110,
    width: 341,
    position: "absolute",
  },
  groupLayout: {
    height: 69,
    width: 311,
    position: "absolute",
  },
  groupPosition: {
    height: 15,
    left: 0,
    position: "absolute",
  },
  groupWrapperLayout2: {
    width: 110,
    height: 15,
    top: 0,
    position: "absolute",
  },
  groupWrapperLayout1: {
    width: 115,
    height: 20,
    top: 0,
    position: "absolute",
  },
  groupWrapperLayout: {
    width: 101,
    height: 18,
    left: 0,
    position: "absolute",
  },
  screen1Icon: {
    top: 0,
    height: 825,
  },
  rectangleIcon: {
    top: 1204,
    left: 32,
    height: 165,
    width: 311,
    position: "absolute",
  },
  tonks: {
    left: 39,
    textAlign: "left",
    color: Color.slategray,
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    top: 0,
  },
  text: {
    textAlign: "left",
    lineHeight: 26,
    fontSize: FontSize.size_sm,
    top: 0,
    left: 0,
  },
  tonksParent: {
    top: -229,
    left: 219,
    width: 83,
    height: 26,
    position: "absolute",
  },
  iconfontAwesomeFreesolidc: {
    top: -228,
    left: 330,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  ovalIcon: {
    left: 0,
    top: 0,
  },
  text1: {
    left: 5,
    fontSize: 11,
    lineHeight: 13,
    fontFamily: FontFamily.helveticaRegular,
    color: Color.white,
    top: 2,
    textAlign: "left",
    position: "absolute",
  },
  ovalParent: {
    top: -237,
    left: 343,
  },
  screen1Child: {
    top: -231,
    width: 26,
    height: 30,
    left: 16,
    position: "absolute",
  },
  mask29Icon: {
    top: 39,
    left: 276,
    width: 18,
    height: 12,
    position: "absolute",
  },
  iconfontAwesomeFreesolidc1: {
    top: 305,
    left: 33,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  hiJordan: {
    left: 0,
    top: 0,
  },
  groupContainer: {
    left: 0,
  },
  icon: {
    left: 66,
    width: 111,
    top: 0,
  },
  medals: {
    top: 48,
    color: Color.silver,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
    position: "absolute",
    left: 0,
  },
  text2: {
    left: 1,
    top: 2,
  },
  parent: {
    top: 16,
    width: 177,
    left: 16,
  },
  groupWrapper: {
    left: 179,
  },
  games: {
    top: 64,
    color: Color.silver,
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.avenirNextMedium,
    fontWeight: "500",
    position: "absolute",
  },
  text3: {
    top: 18,
    left: 17,
  },
  icon1: {
    top: 35,
    left: 103,
    height: 77,
    width: 77,
    position: "absolute",
  },
  groupParent: {
    top: 38,
    height: 100,
    width: 343,
    left: 0,
    position: "absolute",
  },
  hiJordanParent: {
    top: -165,
    height: 138,
    width: 343,
    left: 16,
    position: "absolute",
  },
  todaysGames: {
    top: 13,
    left: 16,
  },
  iphoneX11ProLightBas: {
    top: -300,
    height: 44,
    overflow: "hidden",
  },
  icon2: {
    top: -223,
    left: 203,
    height: 13,
  },
  vectorContainer: {
    left: 0,
    top: 0,
  },
  frameChild: {
    width: 311,
    left: 0,
    top: 0,
  },
  x: {
    left: 4,
    textAlign: "right",
    top: 23,
    color: Color.darkslategray,
    fontFamily: FontFamily.avenirNextRegular,
    position: "absolute",
  },
  under: {
    textTransform: "uppercase",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
    textAlign: "right",
    color: Color.silver,
    top: 0,
  },
  xParent: {
    left: 97,
    width: 46,
  },
  x1: {
    left: 2,
    textAlign: "right",
    top: 23,
    color: Color.darkslategray,
    fontFamily: FontFamily.avenirNextRegular,
    position: "absolute",
  },
  xGroup: {
    left: 172,
    width: 39,
  },
  text4: {
    top: 23,
    color: Color.darkslategray,
    fontFamily: FontFamily.avenirNextRegular,
    position: "absolute",
    textAlign: "left",
    left: 0,
  },
  prizePoolParent: {
    width: 77,
    left: 0,
  },
  text5: {
    color: Color.darkslategray,
    fontFamily: FontFamily.avenirNextRegular,
    position: "absolute",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  icon3: {
    height: 13,
    left: 17,
    top: 2,
  },
  group: {
    left: 0,
    top: 0,
  },
  groupWrapper1: {
    left: 46,
    top: 23,
  },
  entryFeesParent: {
    left: 235,
    width: 76,
  },
  vectorParent1: {
    width: 311,
    left: 0,
    top: 0,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  groupWrapper2: {
    height: 40,
    position: "absolute",
    left: 0,
  },
  fill5Icon: {
    top: 4,
    position: "absolute",
  },
  under1: {
    lineHeight: 17,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
    left: 15,
    color: Color.white,
    top: 0,
  },
  fill5Parent: {
    left: 44,
    width: 60,
    top: 11,
  },
  fill6Icon: {
    height: 11,
    width: 10,
    left: 0,
  },
  fill6Parent: {
    left: 49,
    width: 50,
    top: 11,
  },
  groupWrapper3: {
    left: 165,
    height: 40,
    position: "absolute",
  },
  groupParent1: {
    top: 93,
    width: 313,
    left: 0,
  },
  whatsYourPrediction: {
    top: 62,
    lineHeight: 17,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
    color: Color.slategray,
    left: 0,
  },
  frameParent: {
    top: 125,
    height: 133,
    width: 313,
    left: 16,
    position: "absolute",
  },
  component1Icon: {
    left: 0,
    top: 0,
  },
  iconsolidclock: {
    left: 73,
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  text6: {
    left: 95,
    color: Color.plum_100,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    top: 0,
  },
  startingIn: {
    color: "#b296dc",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    left: 0,
    position: "absolute",
    textAlign: "right",
    top: 2,
  },
  groupWrapper5: {
    width: 148,
    top: 0,
    left: 0,
  },
  groupWrapper4: {
    left: 163,
    opacity: 0.75,
    width: 148,
    top: 0,
  },
  underOrOver: {
    color: Color.plum_100,
    textTransform: "uppercase",
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    left: 0,
    position: "absolute",
    top: 2,
    textAlign: "left",
  },
  groupParent3: {
    width: 311,
    left: 0,
    top: 0,
  },
  bitcoinPriceWill: {
    color: Color.plum_100,
  },
  text7: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
  },
  at7AEtOn22ndJan21: {
    color: Color.white,
  },
  bitcoinPriceWillContainer: {
    lineHeight: 19,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    top: 0,
  },
  bitcoinPriceWillBeUnder2Wrapper: {
    top: 33,
    height: 38,
  },
  groupParent2: {
    top: 17,
    height: 71,
    left: 15,
    width: 311,
    position: "absolute",
  },
  component1: {
    top: 1,
    left: 1,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  groupChild3: {
    left: 0,
    top: 0,
  },
  groupIcon: {
    top: 32,
    height: 10,
    width: 311,
    left: 0,
    position: "absolute",
  },
  predictedUnder: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    left: 0,
    position: "absolute",
    color: Color.silver,
    textAlign: "left",
    top: 0,
  },
  groupWrapper7: {
    width: 123,
    top: 0,
  },
  predictedOver: {
    lineHeight: 15,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratMedium,
    left: 0,
    position: "absolute",
    textAlign: "right",
    color: Color.silver,
    top: 0,
  },
  groupWrapper10: {
    left: 0,
  },
  groupWrapper9: {
    left: 201,
  },
  groupParent5: {
    top: 54,
    width: 311,
  },
  excludeIcon: {
    width: 17,
    height: 13,
  },
  viewChart: {
    left: 25,
    lineHeight: 17,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
    color: Color.slategray,
    top: 0,
  },
  excludeParent: {
    left: 12,
    width: 103,
    top: 1,
  },
  iconfontAwesomeFreesolidc2: {
    width: 20,
    height: 20,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  groupWrapper12: {
    left: 0,
  },
  groupWrapper11: {
    left: 196,
  },
  players: {
    left: 20,
    lineHeight: 17,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
    color: Color.slategray,
    top: 0,
  },
  vectorIcon: {
    left: 3,
    width: 7,
    height: 7,
  },
  vectorIcon1: {
    width: 12,
    height: 5,
    top: 11,
    left: 0,
    position: "absolute",
  },
  groupWrapper14: {
    top: 0,
  },
  groupWrapper13: {
    top: 1,
  },
  groupParent6: {
    width: 311,
    left: 0,
    top: 0,
  },
  groupParent4: {
    left: 0,
    top: 0,
  },
  groupWrapper6: {
    top: 20,
    left: 15,
  },
  vectorParent4: {
    top: 278,
    left: 1,
  },
  groupView: {
    top: 51,
    left: 16,
  },
  screen1: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 825,
  },
});

export default Screen1;
