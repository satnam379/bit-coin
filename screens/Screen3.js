import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Screen3 = () => {
  return (
    <View style={[styles.screen3, styles.navItemBg]}>
      <Image
        style={styles.screen3Icon}
        resizeMode="cover"
        source={require("../assets/screen-3.png")}
      />
      <Image
        style={styles.iphoneX11ProLightBas}
        resizeMode="cover"
        source={require("../assets/iphone-x-11-pro--light--base.png")}
      />
      <Image
        style={styles.screen3Child}
        resizeMode="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Text style={styles.profile}>Profile</Text>
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={[styles.groupWrapper, styles.groupWrapperLayout]}>
          <View style={[styles.vectorParent, styles.groupWrapperLayout]}>
            <Image
              style={[styles.groupChild, styles.groupParentLayout1]}
              resizeMode="cover"
              source={require("../assets/rectangle-1196.png")}
            />
            <Image
              style={styles.groupItem}
              resizeMode="cover"
              source={require("../assets/group-11345.png")}
            />
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.groupView, styles.groupLayout]}>
                <View
                  style={[styles.underOrOverWrapper, styles.wrapperPosition1]}
                >
                  <Text style={[styles.underOrOver, styles.x3Typo]}>
                    Under or Over
                  </Text>
                </View>
                <View style={[styles.groupParent1, styles.groupPosition]}>
                  <View style={[styles.wrapper, styles.wrapperPosition]}>
                    <Text style={styles.text}>{`81% `}</Text>
                  </View>
                  <Image
                    style={[styles.groupInner, styles.groupPosition]}
                    resizeMode="cover"
                    source={require("../assets/group-12234.png")}
                  />
                </View>
              </View>
              <View style={[styles.groupParent2, styles.groupParentLayout]}>
                <View style={[styles.top5Wrapper, styles.wrapperPosition1]}>
                  <Text style={[styles.underOrOver, styles.x3Typo]}>Top 5</Text>
                </View>
                <View style={[styles.groupParent3, styles.groupParentLayout]}>
                  <View style={[styles.container, styles.wrapperPosition]}>
                    <Text style={styles.text}>{`-51% `}</Text>
                  </View>
                  <Image
                    style={[styles.groupIcon, styles.groupIconLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-12233.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.groupParent4, styles.groupParentPosition]}>
          <View style={[styles.vectorGroup, styles.vectorGroupLayout]}>
            <Image
              style={[styles.rectangleIcon, styles.vectorGroupLayout]}
              resizeMode="cover"
              source={require("../assets/rectangle-1181.png")}
            />
            <View style={styles.groupParent5}>
              <View style={[styles.groupParent6, styles.groupParentLayout1]}>
                <View
                  style={[styles.vectorContainer, styles.vectorParentLayout]}
                >
                  <Image
                    style={[styles.vectorContainer, styles.vectorParentLayout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-1172.png")}
                  />
                  <View style={[styles.groupFrame, styles.top10GroupLayout]}>
                    <View
                      style={[styles.impossibleParent, styles.top10GroupLayout]}
                    >
                      <Text
                        style={[styles.impossible, styles.impossiblePosition]}
                      >
                        Impossible
                      </Text>
                      <Text style={[styles.top10Of, styles.top10OfTypo]}>
                        Top 10% of highest spending players in a month
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.groupChild2, styles.groupChildLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-12664.png")}
                  />
                </View>
                <View style={[styles.vectorParent1, styles.groupChild3Layout]}>
                  <Image
                    style={[styles.groupChild3, styles.groupChild3Layout]}
                    resizeMode="cover"
                    source={require("../assets/rectangle-11721.png")}
                  />
                  <View style={[styles.groupWrapper1, styles.top10GroupLayout]}>
                    <View
                      style={[
                        styles.firstStripeEarnedParent,
                        styles.top10GroupLayout,
                      ]}
                    >
                      <Text
                        style={[styles.impossible, styles.impossiblePosition]}
                      >
                        First Stripe Earned
                      </Text>
                      <Text style={[styles.top10Of1, styles.top10GroupLayout]}>
                        Top 10% of highest spending players in a month
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[styles.groupChild4, styles.groupChildLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-12664.png")}
                  />
                </View>
              </View>
              <View style={[styles.vectorParent2, styles.vectorParentPosition]}>
                <Image
                  style={[styles.vectorContainer, styles.vectorParentLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1172.png")}
                />
                <View style={[styles.groupFrame, styles.top10GroupLayout]}>
                  <View
                    style={[styles.impossibleParent, styles.top10GroupLayout]}
                  >
                    <View style={[styles.frameView, styles.framePosition]}>
                      <Image
                        style={styles.framePosition}
                        resizeMode="cover"
                        source={require("../assets/frame-12279.png")}
                      />
                      <Text
                        style={[styles.impossible, styles.impossiblePosition]}
                      >
                        First Stripe Earned
                      </Text>
                      <Text style={[styles.x3, styles.x3Typo]}>x 3</Text>
                    </View>
                    <Text style={[styles.top10Of, styles.top10OfTypo]}>
                      Top 10% of highest spending players in a month
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild2, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-126641.png")}
                />
              </View>
              <View style={[styles.vectorParent3, styles.vectorParentPosition]}>
                <Image
                  style={[styles.vectorContainer, styles.vectorParentLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1172.png")}
                />
                <View style={[styles.groupFrame, styles.top10GroupLayout]}>
                  <View
                    style={[styles.impossibleParent, styles.top10GroupLayout]}
                  >
                    <Text
                      style={[styles.impossible, styles.impossiblePosition]}
                    >
                      Born Winner
                    </Text>
                    <Text style={[styles.top10Of, styles.top10OfTypo]}>
                      Top 10% of highest spending players in a month
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild2, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-126641.png")}
                />
              </View>
              <View style={[styles.vectorParent4, styles.vectorParentPosition]}>
                <Image
                  style={[styles.vectorContainer, styles.vectorParentLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1172.png")}
                />
                <View
                  style={[styles.groupWrapper4, styles.groupWrapper4Layout]}
                >
                  <View
                    style={[
                      styles.traderOfTheMonthParent,
                      styles.groupWrapper4Layout,
                    ]}
                  >
                    <Text
                      style={[styles.impossible, styles.impossiblePosition]}
                    >
                      Trader of the Month
                    </Text>
                    <Text
                      style={[styles.won7UnderOver, styles.groupWrapper4Layout]}
                    >
                      Won 7 under-over games in a row
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild2, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-12664.png")}
                />
              </View>
              <View style={[styles.vectorParent5, styles.vectorParentPosition]}>
                <Image
                  style={[styles.vectorContainer, styles.vectorParentLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1172.png")}
                />
                <View style={[styles.groupFrame, styles.top10GroupLayout]}>
                  <View
                    style={[styles.impossibleParent, styles.top10GroupLayout]}
                  >
                    <Text
                      style={[styles.impossible, styles.impossiblePosition]}
                    >
                      Rising Star
                    </Text>
                    <Text style={[styles.top10Of, styles.top10OfTypo]}>
                      Top 10% of highest spending players in a month
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild2, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-12664.png")}
                />
              </View>
              <View style={[styles.vectorParent6, styles.vectorParentPosition]}>
                <Image
                  style={[styles.vectorContainer, styles.vectorParentLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-1172.png")}
                />
                <View style={[styles.groupFrame, styles.top10GroupLayout]}>
                  <View
                    style={[styles.impossibleParent, styles.top10GroupLayout]}
                  >
                    <Text
                      style={[styles.impossible, styles.impossiblePosition]}
                    >
                      Jackpot
                    </Text>
                    <Text style={[styles.top10Of, styles.top10OfTypo]}>
                      Top 10% of highest spending players in a month
                    </Text>
                  </View>
                </View>
                <Image
                  style={[styles.groupChild2, styles.groupChildLayout]}
                  resizeMode="cover"
                  source={require("../assets/group-12664.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.gamesPlayedParent, styles.vectorParentPosition]}>
            <Text style={[styles.gamesPlayed, styles.badgesPosition]}>
              Games played
            </Text>
            <Text style={[styles.badges, styles.badgesTypo]}>Badges</Text>
            <Image
              style={styles.groupChild15}
              resizeMode="cover"
              source={require("../assets/rectangle-24.png")}
            />
            <Image
              style={styles.groupChild16}
              resizeMode="cover"
              source={require("../assets/rectangle-1251.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.iconfontAwesomeFreesolide, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/iconfont-awesome-freesolideedit.png")}
        />
      </View>
      <View style={[styles.iphoneX11ProLight5T, styles.iphoneLayout1]}>
        <View style={[styles.iphoneX11ProLight5T1, styles.navItemBg]}>
          <Image
            style={[styles.iphoneX11ProLight5T2, styles.iphoneLayout1]}
            resizeMode="cover"
            source={require("../assets/iphone-x-11-pro--light--5-tabs.png")}
          />
          <View style={[styles.tabs, styles.navItemBg]}>
            <View style={[styles.navItemLight, styles.navItemPosition]}>
              <Image
                style={[styles.navItemLight1, styles.navItemPosition]}
                resizeMode="cover"
                source={require("../assets/nav-item--light.png")}
              />
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label1, styles.labelTypo]}>Home</Text>
            </View>
            <View style={[styles.navItemLight2, styles.navItemPosition]}>
              <Image
                style={[styles.navItemLight1, styles.navItemPosition]}
                resizeMode="cover"
                source={require("../assets/nav-item--light.png")}
              />
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label2, styles.labelTypo]}>Leagues</Text>
            </View>
            <View style={[styles.navItemLight4, styles.navItemPosition]}>
              <Image
                style={[styles.navItemLight1, styles.navItemPosition]}
                resizeMode="cover"
                source={require("../assets/nav-item--light.png")}
              />
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label3, styles.labelTypo]}>Research</Text>
            </View>
            <View style={[styles.navItemLight6, styles.navItemPosition]}>
              <Image
                style={[styles.navItemLight1, styles.navItemPosition]}
                resizeMode="cover"
                source={require("../assets/nav-item--light.png")}
              />
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label4, styles.labelTypo]}>Leaderboard</Text>
            </View>
            <View style={[styles.navItemLight8, styles.navItemPosition]}>
              <Image
                style={[styles.navItemLight1, styles.navItemPosition]}
                resizeMode="cover"
                source={require("../assets/nav-item--light.png")}
              />
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
              <Text style={[styles.label5, styles.labelTypo]}>Profile</Text>
            </View>
          </View>
          <Image
            style={styles.homeIndicatorIcon}
            resizeMode="cover"
            source={require("../assets/home-indicator.png")}
          />
        </View>
        <Image
          style={[styles.iphoneX11ProLight5TChild, styles.iphoneLayout]}
          resizeMode="cover"
          source={require("../assets/frame-12281.png")}
        />
        <Image
          style={[styles.iphoneX11ProLight5TItem, styles.iphoneLayout]}
          resizeMode="cover"
          source={require("../assets/frame-12263.png")}
        />
        <Image
          style={[styles.iconfontAwesomeFreesolidu, styles.iphoneLayout]}
          resizeMode="cover"
          source={require("../assets/iconfont-awesome-freesoliduuser.png")}
        />
        <Image
          style={[styles.iconfontAwesomeFreesolidh, styles.iphoneLayout]}
          resizeMode="cover"
          source={require("../assets/iconfont-awesome-freesolidhhome.png")}
        />
        <Image
          style={[styles.iconfontAwesomeFreesolidt, styles.iphoneLayout]}
          resizeMode="cover"
          source={require("../assets/iconfont-awesome-freesolidttrophy.png")}
        />
      </View>
      <Image
        style={[styles.screen3Item, styles.groupIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-12465.png")}
      />
      <View style={styles.iconfontAwesomeFreesolidcParent}>
        <Image
          style={[styles.iconfontAwesomeFreesolidc, styles.iphoneLayout]}
          resizeMode="cover"
          source={require("../assets/iconfont-awesome-freesolidccommentalt.png")}
        />
        <View style={[styles.ovalParent, styles.ovalLayout]}>
          <Image
            style={[styles.ovalIcon, styles.ovalLayout]}
            resizeMode="cover"
            source={require("../assets/oval.png")}
          />
          <Text style={styles.text2}>1</Text>
        </View>
      </View>
      <View style={[styles.logoutParent, styles.frameIconLayout]}>
        <Text style={[styles.logout, styles.labelTypo1]}>Logout</Text>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          resizeMode="cover"
          source={require("../assets/frame-12282.png")}
        />
      </View>
      <Image
        style={styles.homeIndicatorLight}
        resizeMode="cover"
        source={require("../assets/home-indicator--light.png")}
      />
      <View style={[styles.groupParent7, styles.groupParentLayout1]}>
        <Image
          style={[styles.groupChild17, styles.navItemPosition]}
          resizeMode="cover"
          source={require("../assets/group-61.png")}
        />
        <Text style={[styles.imASoftware, styles.top10OfTypo]}>
          I’m a software developer that has been in the crypto space since 2012.
          And I’ve seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <View style={styles.ptsWrapper}>
          <Text style={[styles.pts, styles.labelTypo1]}>6000 Pts</Text>
        </View>
        <View style={[styles.groupWrapper7, styles.wrapperLayout]}>
          <View style={[styles.jinaSimonsWrapper, styles.wrapperLayout]}>
            <Text style={[styles.jinaSimons, styles.impossiblePosition]}>
              Jina Simons
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navItemBg: {
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  groupParentPosition: {
    width: 376,
    left: 0,
    position: "absolute",
  },
  groupWrapperLayout: {
    height: 119,
    width: 343,
    position: "absolute",
  },
  groupParentLayout1: {
    width: 343,
    position: "absolute",
  },
  groupLayout: {
    height: 63,
    position: "absolute",
  },
  wrapperPosition1: {
    height: 18,
    left: 0,
    top: 0,
    position: "absolute",
  },
  x3Typo: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  groupPosition: {
    height: 32,
    left: 0,
    position: "absolute",
  },
  wrapperPosition: {
    height: 30,
    top: 0,
    position: "absolute",
  },
  groupParentLayout: {
    width: 96,
    position: "absolute",
  },
  groupIconLayout: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  vectorGroupLayout: {
    height: 950,
    width: 375,
    left: 0,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 105,
    width: 343,
  },
  top10GroupLayout: {
    width: 231,
    position: "absolute",
  },
  impossiblePosition: {
    color: Color.darkslategray,
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  top10OfTypo: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.slategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 0,
  },
  groupChildLayout: {
    height: 60,
    width: 60,
    left: 16,
    position: "absolute",
  },
  groupChild3Layout: {
    height: 95,
    width: 343,
    left: 0,
    position: "absolute",
  },
  vectorParentPosition: {
    left: 1,
    position: "absolute",
  },
  framePosition: {
    height: 17,
    width: 160,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper4Layout: {
    width: 235,
    position: "absolute",
  },
  badgesPosition: {
    top: 24,
    textAlign: "center",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  badgesTypo: {
    color: Color.indigo,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  frameIconLayout: {
    height: 20,
    position: "absolute",
  },
  iphoneLayout1: {
    height: 83,
    width: 375,
    left: 0,
    position: "absolute",
  },
  navItemPosition: {
    width: 76,
    top: 0,
    position: "absolute",
  },
  labelTypo: {
    lineHeight: 12,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    top: 34,
    textAlign: "center",
    position: "absolute",
  },
  iphoneLayout: {
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  ovalLayout: {
    width: 16,
    height: 16,
    top: 0,
    position: "absolute",
  },
  labelTypo1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  wrapperLayout: {
    width: 86,
    height: 18,
    position: "absolute",
  },
  screen3Icon: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 1494,
  },
  iphoneX11ProLightBas: {
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  screen3Child: {
    top: 1508,
    left: -1595,
    height: 16,
    width: 29,
    position: "absolute",
  },
  profile: {
    top: 75,
    left: 164,
    textAlign: "center",
    color: Color.slategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChild: {
    height: 103,
    top: 16,
    left: 0,
  },
  groupItem: {
    left: 158,
    width: 27,
    height: 31,
    top: 0,
    position: "absolute",
  },
  underOrOver: {
    textAlign: "left",
    color: Color.slategray,
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  underOrOverWrapper: {
    width: 102,
  },
  text: {
    fontSize: FontSize.size_5xl,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.dimgray,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  wrapper: {
    left: 44,
    width: 47,
  },
  groupInner: {
    width: 32,
    top: 0,
  },
  groupParent1: {
    width: 91,
    top: 31,
  },
  groupView: {
    width: 102,
    left: 0,
    top: 0,
  },
  top5Wrapper: {
    width: 39,
  },
  container: {
    left: 42,
    width: 54,
  },
  groupIcon: {
    top: 1,
    left: 0,
  },
  groupParent3: {
    top: 31,
    height: 31,
    left: 0,
  },
  groupParent2: {
    left: 159,
    height: 62,
    top: 0,
  },
  groupContainer: {
    top: 36,
    left: 20,
    width: 255,
  },
  vectorParent: {
    left: 0,
    top: 0,
  },
  groupWrapper: {
    top: 47,
    left: 16,
  },
  rectangleIcon: {
    opacity: 0.06,
    top: 0,
  },
  vectorContainer: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  impossible: {
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  top10Of: {
    top: 25,
    lineHeight: 20,
    width: 231,
    position: "absolute",
  },
  impossibleParent: {
    height: 65,
    left: 0,
    top: 0,
  },
  groupFrame: {
    height: 65,
    left: 92,
    top: 20,
  },
  groupChild2: {
    top: 20,
  },
  groupChild3: {
    top: 0,
  },
  top10Of1: {
    top: 27,
    textAlign: "left",
    color: Color.slategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    left: 0,
  },
  firstStripeEarnedParent: {
    height: 62,
    left: 0,
    top: 0,
  },
  groupWrapper1: {
    left: 92,
    height: 62,
    top: 16,
  },
  groupChild4: {
    top: 18,
  },
  vectorParent1: {
    top: 121,
  },
  groupParent6: {
    top: 606,
    height: 216,
    left: 0,
  },
  x3: {
    left: 139,
    color: "#ffa600",
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  frameView: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  vectorParent2: {
    height: 105,
    width: 343,
    top: 0,
  },
  vectorParent3: {
    top: 121,
    height: 105,
    width: 343,
  },
  won7UnderOver: {
    lineHeight: 20,
    textAlign: "left",
    color: Color.slategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    left: 0,
    top: 25,
  },
  traderOfTheMonthParent: {
    height: 65,
    left: 0,
    top: 0,
  },
  groupWrapper4: {
    height: 65,
    left: 92,
    top: 20,
  },
  vectorParent4: {
    top: 242,
    height: 105,
    width: 343,
  },
  vectorParent5: {
    top: 363,
    height: 105,
    width: 343,
  },
  vectorParent6: {
    top: 484,
    height: 105,
    width: 343,
  },
  groupParent5: {
    left: 15,
    width: 344,
    height: 822,
    top: 20,
    position: "absolute",
  },
  vectorGroup: {
    top: 64,
  },
  gamesPlayed: {
    left: 43,
    color: Color.slategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  badges: {
    left: 256,
    top: 24,
    textAlign: "center",
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChild15: {
    height: 4,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChild16: {
    top: 62,
    left: 188,
    width: 188,
    height: 2,
    position: "absolute",
  },
  gamesPlayedParent: {
    height: 64,
    width: 375,
    top: 0,
  },
  groupParent4: {
    top: 194,
    height: 1014,
  },
  iconfontAwesomeFreesolide: {
    width: 20,
    height: 20,
    top: 0,
    overflow: "hidden",
    left: 16,
  },
  groupParent: {
    top: 358,
    height: 1208,
  },
  iphoneX11ProLight5T2: {
    top: 0,
  },
  navItemLight1: {
    height: 49,
    left: 0,
  },
  icon: {
    left: 26,
    height: 22,
    display: "none",
    width: 24,
    top: 7,
    position: "absolute",
  },
  label1: {
    left: 22,
    color: Color.indigo,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
  },
  navItemLight: {
    height: 49,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  label2: {
    left: 16,
    color: Color.slategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  navItemLight2: {
    left: 75,
    height: 49,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  label3: {
    left: 14,
    color: Color.slategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  navItemLight4: {
    left: 150,
    height: 49,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  label4: {
    left: 6,
    color: Color.slategray,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  navItemLight6: {
    left: 225,
    height: 49,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  label5: {
    left: 21,
    fontFamily: FontFamily.montserratSemibold,
    fontWeight: "600",
    color: Color.slategray,
  },
  navItemLight8: {
    left: 300,
    height: 49,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  tabs: {
    height: 49,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicatorIcon: {
    top: 70,
    left: 122,
    width: 134,
    height: 5,
    position: "absolute",
  },
  iphoneX11ProLight5T1: {
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    height: 87,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  iphoneX11ProLight5TChild: {
    left: 175,
    top: 7,
    height: 24,
  },
  iphoneX11ProLight5TItem: {
    left: 250,
    top: 7,
    height: 24,
  },
  iconfontAwesomeFreesolidu: {
    left: 325,
    top: 7,
    height: 24,
  },
  iconfontAwesomeFreesolidh: {
    left: 25,
    top: 7,
    height: 24,
  },
  iconfontAwesomeFreesolidt: {
    left: 100,
    top: 7,
    height: 24,
  },
  iphoneX11ProLight5T: {
    top: 1411,
  },
  screen3Item: {
    top: 69,
    left: 16,
  },
  iconfontAwesomeFreesolidc: {
    top: 9,
    left: 0,
  },
  ovalIcon: {
    left: 0,
  },
  text2: {
    top: 2,
    left: 5,
    fontSize: 11,
    lineHeight: 13,
    fontFamily: FontFamily.helveticaRegular,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  ovalParent: {
    left: 13,
  },
  iconfontAwesomeFreesolidcParent: {
    top: 63,
    left: 330,
    height: 33,
    width: 29,
    position: "absolute",
  },
  logout: {
    left: 28,
    textAlign: "left",
    color: Color.slategray,
    lineHeight: 17,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  frameIcon: {
    width: 20,
    height: 20,
    top: 0,
    overflow: "hidden",
    left: 0,
  },
  logoutParent: {
    top: 360,
    left: 148,
    width: 79,
  },
  homeIndicatorLight: {
    top: 1460,
    height: 34,
    width: 375,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild17: {
    left: 134,
    height: 75,
  },
  imASoftware: {
    top: 135,
    width: 343,
    position: "absolute",
  },
  pts: {
    fontSize: 12,
    lineHeight: 15,
    textAlign: "left",
    color: Color.slategray,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ptsWrapper: {
    top: 112,
    left: 147,
    width: 55,
    height: 15,
    position: "absolute",
  },
  jinaSimons: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  jinaSimonsWrapper: {
    left: 0,
    top: 0,
  },
  groupWrapper7: {
    top: 87,
    left: 133,
  },
  groupParent7: {
    top: 125,
    height: 215,
    left: 16,
  },
  screen3: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 1494,
  },
});

export default Screen3;
