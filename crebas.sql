/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     10/2/2020 3:48:44 PM                         */
/*==============================================================*/


drop table if exists ACCOUNT;

drop table if exists BELONGINCONVER;

drop table if exists CHECKPOINT_PIC;

drop table if exists CHECK_POINT;

drop table if exists CHECK_POINT_TYPE;

drop table if exists COMMENT_RATING;

drop table if exists CONVERSATION;

drop table if exists FOOD;

drop table if exists FOOD_PIC;

drop table if exists LOCATION;

drop table if exists LOCATION_PIC;

drop table if exists MESSAGE;

drop table if exists NOTIFICATIONS;

drop table if exists POST;

drop table if exists SELLER;

drop table if exists STAGE;

drop table if exists TOUR;

drop table if exists TOURGUIDESELFTOUR_PIC;

drop table if exists TOURGUIDE_CHOOSE;

drop table if exists TOURGUIDE_COMMENT;

drop table if exists TOUR_AD;

drop table if exists TOUR_APPLY;

drop table if exists TOUR_BUY;

drop table if exists TOUR_CONFIRM;

drop table if exists TOUR_GUIDE;

drop table if exists TOUR_PLAN;

drop table if exists TOUR_PLAN_DETAIL;

drop table if exists TOUR_START;

drop table if exists USER;

/*==============================================================*/
/* Table: ACCOUNT                                               */
/*==============================================================*/
create table ACCOUNT
(
   UNAME                varchar(50) not null,
   PSW                  varchar(50) not null,
   EMAIL                varchar(50) not null,
   TOURGUIDE            bool not null,
   BANK                 varchar(50),
   TRUSTING_SCORE       int not null,
   FULLNAME             varchar(50),
   BIRTHDAY             date,
   PHONE                varchar(12),
   NATION               varchar(30),
   ADDRESS              varchar(100),
   GENDER               char(1) not null,
   ROLE                 int not null default 1,
   primary key (UNAME)
);

/*==============================================================*/
/* Table: BELONGINCONVER                                        */
/*==============================================================*/
create table BELONGINCONVER
(
   UNAME                varchar(50) not null,
   CONVER_ID            int not null,
   primary key (UNAME, CONVER_ID)
);

/*==============================================================*/
/* Table: CHECKPOINT_PIC                                        */
/*==============================================================*/
create table CHECKPOINT_PIC
(
   UNAME                varchar(50) not null,
   TOURPLAN_ID          int not null,
   LOCATION_ID          int not null,
   TOUR_ID              int not null,
   CHECKPOINTPIC_ID     int not null,
   CHECKPOINTPIC_PATH   varchar(50) not null,
   primary key (UNAME, TOURPLAN_ID, LOCATION_ID, TOUR_ID, CHECKPOINTPIC_ID)
);

/*==============================================================*/
/* Table: CHECK_POINT                                           */
/*==============================================================*/
create table CHECK_POINT
(
   UNAME                varchar(50) not null,
   TOURPLAN_ID          int not null,
   LOCATION_ID          int not null,
   TOUR_ID              int not null,
   CHECKPOINT_TYPE      varchar(30) not null,
   CHECKPOINT_TIMECREATED datetime not null,
   CHECKPOINT_X         decimal(10) not null,
   CHECKPOINT_Y         decimal(10) not null,
   primary key (UNAME, TOURPLAN_ID, LOCATION_ID, TOUR_ID)
);

/*==============================================================*/
/* Table: CHECK_POINT_TYPE                                      */
/*==============================================================*/
create table CHECK_POINT_TYPE
(
   CHECKPOINT_TYPE      varchar(30) not null,
   CHECKPOINTTYPE_DESCRIBE varchar(200) not null,
   primary key (CHECKPOINT_TYPE)
);

/*==============================================================*/
/* Table: COMMENT_RATING                                        */
/*==============================================================*/
create table COMMENT_RATING
(
   UNAME                varchar(50) not null,
   TOURPLAN_ID          int not null,
   LOCATION_ID          int not null,
   TOUR_ID              int not null,
   COMMENT_CONTENT      varchar(200) not null,
   PICTURE              varchar(32) not null,
   primary key (UNAME, TOURPLAN_ID, LOCATION_ID, TOUR_ID)
);

/*==============================================================*/
/* Table: CONVERSATION                                          */
/*==============================================================*/
create table CONVERSATION
(
   CONVER_ID            int not null,
   CONVER_NAME          varchar(50) not null,
   CONVER_CREATEDTIME   time not null,
   primary key (CONVER_ID)
);

/*==============================================================*/
/* Table: FOOD                                                  */
/*==============================================================*/
create table FOOD
(
   UNAME                varchar(50) not null,
   FOOD_NAME            varchar(50) not null,
   FOOD_DESCRIBE        varchar(200) not null,
   primary key (UNAME)
);

/*==============================================================*/
/* Table: FOOD_PIC                                              */
/*==============================================================*/
create table FOOD_PIC
(
   UNAME                varchar(50) not null,
   FOODPIC_ID           int not null,
   FOODPIC_PATH         varchar(50) not null,
   primary key (UNAME, FOODPIC_ID)
);

/*==============================================================*/
/* Table: LOCATION                                              */
/*==============================================================*/
create table LOCATION
(
   LOCATION_ID          int not null,
   LOCATION_NAME        varchar(50) not null,
   LOCATION_DESCRIPTION varchar(200) not null,
   LOCATION_X           decimal(10) not null,
   LOCATION_Y           decimal(10) not null,
   primary key (LOCATION_ID)
);

/*==============================================================*/
/* Table: LOCATION_PIC                                          */
/*==============================================================*/
create table LOCATION_PIC
(
   LOCATIONPIC_ID       int not null,
   LOCATION_ID          int not null,
   LOCATIONPIC_PATH     varchar(50) not null,
   primary key (LOCATIONPIC_ID)
);

/*==============================================================*/
/* Table: MESSAGE                                               */
/*==============================================================*/
create table MESSAGE
(
   UNAME                varchar(50) not null,
   CONVER_ID            int not null,
   CREATED_TIME         time not null,
   CONTENT              varchar(200) not null,
   MSG_SEEN             bool not null,
   primary key (UNAME, CONVER_ID, CREATED_TIME)
);

/*==============================================================*/
/* Table: NOTIFICATIONS                                         */
/*==============================================================*/
create table NOTIFICATIONS
(
   UNAME                varchar(50) not null,
   NOTI_CREATEDTIME     datetime not null,
   NOTI_CONTENT         varchar(200) not null,
   NAVIGATE_TO          varchar(50) not null,
   PARAM                varchar(32) not null,
   NOTI_SEEN            bool not null,
   primary key (UNAME, NOTI_CREATEDTIME)
);

/*==============================================================*/
/* Table: POST                                                  */
/*==============================================================*/
create table POST
(
   USE_UNAME            varchar(50) not null,
   POST_ID              int not null,
   UNAME                varchar(50) not null,
   TOURPLAN_ID          int not null,
   POST_MAXPRICE        int,
   POST_MAXDURATION     int,
   POST_DONE            bool not null,
   POST_STARTDATE       date,
   POST_CREATEDTIME     datetime not null,
   POST_STAYING_TIME    int,
   primary key (USE_UNAME, POST_ID)
);

/*==============================================================*/
/* Table: SELLER                                                */
/*==============================================================*/
create table SELLER
(
   UNAME                varchar(50) not null,
   SELLER_SHOP_NAME     varchar(50) not null,
   SHOP_X               decimal(10) not null,
   SHOP_Y               decimal(10) not null,
   primary key (UNAME)
);

/*==============================================================*/
/* Table: STAGE                                                 */
/*==============================================================*/
create table STAGE
(
   STAGE                varchar(20) not null,
   STAGE_DESCRIPTION    varchar(200) not null,
   primary key (STAGE)
);

/*==============================================================*/
/* Table: TOUR                                                  */
/*==============================================================*/
create table TOUR
(
   TOUR_ID              int not null,
   STAGE                varchar(20) not null,
   CHOOSE_ID            int not null,
   CONFIRM_ID           int not null,
   TOUR_CREATEDTIME     datetime not null,
   USERTOUR             bool not null,
   primary key (TOUR_ID)
);

/*==============================================================*/
/* Table: TOURGUIDESELFTOUR_PIC                                 */
/*==============================================================*/
create table TOURGUIDESELFTOUR_PIC
(
   TOU_UNAME            varchar(50) not null,
   TOURAD_ID            int not null,
   TOURGUIDETOURPIC_ID  int not null,
   TOURGUIDETOURPIC_PATH varchar(50) not null,
   primary key (TOU_UNAME, TOURAD_ID, TOURGUIDETOURPIC_ID)
);

/*==============================================================*/
/* Table: TOURGUIDE_CHOOSE                                      */
/*==============================================================*/
create table TOURGUIDE_CHOOSE
(
   CHOOSE_ID            int not null,
   UNAME                varchar(50) not null,
   CHOOSE_IS_POST       bool not null,
   CHOOSE_CREATEDTIME   datetime not null,
   primary key (CHOOSE_ID)
);

/*==============================================================*/
/* Table: TOURGUIDE_COMMENT                                     */
/*==============================================================*/
create table TOURGUIDE_COMMENT
(
   TOUR_ID              int not null,
   CONTENT              varchar(200) not null,
   LANGUAGE_COMMENT     int not null,
   PERSONALITY_COMMENT  int not null,
   KNOWLEDGE_COMMENT    int not null,
   primary key (TOUR_ID)
);

/*==============================================================*/
/* Table: TOUR_AD                                               */
/*==============================================================*/
create table TOUR_AD
(
   TOU_UNAME            varchar(50) not null,
   TOURAD_ID            int not null,
   UNAME                varchar(50) not null,
   TOURPLAN_ID          int not null,
   TOURAD_PRICE         int not null,
   TOURAD_DESCRIPTION   varchar(200),
   TOURAD_PEOPLE_SCALE  int not null,
   primary key (TOU_UNAME, TOURAD_ID)
);

/*==============================================================*/
/* Table: TOUR_APPLY                                            */
/*==============================================================*/
create table TOUR_APPLY
(
   UNAME                varchar(50) not null,
   USE_UNAME            varchar(50) not null,
   POST_ID              int not null,
   TOURAPPLY_PRICE      int not null,
   primary key (USE_UNAME, UNAME, POST_ID)
);

/*==============================================================*/
/* Table: TOUR_BUY                                              */
/*==============================================================*/
create table TOUR_BUY
(
   CHOOSE_ID            int not null,
   TOU_UNAME            varchar(50) not null,
   TOURAD_ID            int not null,
   TOURBUY_STARTDATE    date not null,
   TOURBUY_PEOPLE       int not null,
   TOURBUY_DONE         bool not null,
   primary key (CHOOSE_ID)
);

/*==============================================================*/
/* Table: TOUR_CONFIRM                                          */
/*==============================================================*/
create table TOUR_CONFIRM
(
   CHOOSE_ID            int not null,
   CONFIRM_ID           int not null,
   CONFIRM_PRICE_       int not null,
   CONFIRM_DATE         date not null,
   CONFIRM_PEOPLE       int not null,
   CONFIRM_             varchar(10) not null,
   CONFIRM_MEETING_Y    varchar(10) not null,
   primary key (CHOOSE_ID, CONFIRM_ID)
);

/*==============================================================*/
/* Table: TOUR_GUIDE                                            */
/*==============================================================*/
create table TOUR_GUIDE
(
   UNAME                varchar(50) not null,
   CMND                 varchar(20) not null,
   LANGUAGE_SCORE       int not null,
   PERSONALITY_SCORE    int not null,
   KNOWLEDGE_SCORE      int not null,
   TOURGUIDE_DESCRIBE   varchar(1000),
   primary key (UNAME)
);

/*==============================================================*/
/* Table: TOUR_PLAN                                             */
/*==============================================================*/
create table TOUR_PLAN
(
   UNAME                varchar(50) not null,
   TOURPLAN_ID          int not null,
   TOURPLAN_STARTTIME   time not null,
   TOURPLAN_DURATION    int not null,
   SUPRISE_ME           bool not null,
   TOURPLAN_X           varchar(10) not null,
   TOURPLAN_Y           varchar(10) not null,
   primary key (UNAME, TOURPLAN_ID)
);

/*==============================================================*/
/* Table: TOUR_PLAN_DETAIL                                      */
/*==============================================================*/
create table TOUR_PLAN_DETAIL
(
   UNAME                varchar(50) not null,
   TOURPLAN_ID          int not null,
   LOCATION_ID          int not null,
   TOURDETAIL_STARTTIME time,
   TOURDETAIL_ENDTIME   time,
   DETAIL_MAXHOUR       int,
   primary key (UNAME, TOURPLAN_ID, LOCATION_ID)
);

/*==============================================================*/
/* Table: TOUR_START                                            */
/*==============================================================*/
create table TOUR_START
(
   CHOOSE_ID            int not null,
   USE_UNAME            varchar(50) not null,
   UNAME                varchar(50) not null,
   POST_ID              int not null,
   primary key (CHOOSE_ID)
);

/*==============================================================*/
/* Table: USER                                                  */
/*==============================================================*/
create table USER
(
   UNAME                varchar(50) not null,
   PASSPORT             varchar(20) not null,
   primary key (UNAME)
);

alter table BELONGINCONVER add constraint FK_BELONGINCONVER foreign key (UNAME)
      references ACCOUNT (UNAME) on delete restrict on update restrict;

alter table BELONGINCONVER add constraint FK_BELONGINCONVER2 foreign key (CONVER_ID)
      references CONVERSATION (CONVER_ID) on delete restrict on update restrict;

alter table CHECKPOINT_PIC add constraint FK_HAVEPIC foreign key (UNAME, TOURPLAN_ID, LOCATION_ID, TOUR_ID)
      references CHECK_POINT (UNAME, TOURPLAN_ID, LOCATION_ID, TOUR_ID) on delete restrict on update restrict;

alter table CHECK_POINT add constraint FK_CHECKPOINTIS foreign key (CHECKPOINT_TYPE)
      references CHECK_POINT_TYPE (CHECKPOINT_TYPE) on delete restrict on update restrict;

alter table CHECK_POINT add constraint FK_CHECKPOINTONTOUR foreign key (TOUR_ID)
      references TOUR (TOUR_ID) on delete restrict on update restrict;

alter table CHECK_POINT add constraint FK_WHICHLOCATIONCHECKPOINT foreign key (UNAME, TOURPLAN_ID, LOCATION_ID)
      references TOUR_PLAN_DETAIL (UNAME, TOURPLAN_ID, LOCATION_ID) on delete restrict on update restrict;

alter table COMMENT_RATING add constraint FK_COMMENTONLOCATION foreign key (UNAME, TOURPLAN_ID, LOCATION_ID, TOUR_ID)
      references CHECK_POINT (UNAME, TOURPLAN_ID, LOCATION_ID, TOUR_ID) on delete restrict on update restrict;

alter table FOOD add constraint FK_SELLFOOD foreign key (UNAME)
      references SELLER (UNAME) on delete restrict on update restrict;

alter table FOOD_PIC add constraint FK_HAVEPICTURES foreign key (UNAME)
      references FOOD (UNAME) on delete restrict on update restrict;

alter table LOCATION_PIC add constraint FK_LOCATIONHAVEPICTURES foreign key (LOCATION_ID)
      references LOCATION (LOCATION_ID) on delete restrict on update restrict;

alter table MESSAGE add constraint FK_CONTAINMESSAGES foreign key (CONVER_ID)
      references CONVERSATION (CONVER_ID) on delete restrict on update restrict;

alter table MESSAGE add constraint FK_SENDMESSAGE foreign key (UNAME)
      references ACCOUNT (UNAME) on delete restrict on update restrict;

alter table NOTIFICATIONS add constraint FK_HAVENOTI foreign key (UNAME)
      references ACCOUNT (UNAME) on delete restrict on update restrict;

alter table POST add constraint FK_COULDHAVEPLANNED foreign key (UNAME, TOURPLAN_ID)
      references TOUR_PLAN (UNAME, TOURPLAN_ID) on delete restrict on update restrict;

alter table POST add constraint FK_CREATEPOST foreign key (USE_UNAME)
      references USER (UNAME) on delete restrict on update restrict;

alter table SELLER add constraint FK_ISSELLER foreign key (UNAME)
      references ACCOUNT (UNAME) on delete restrict on update restrict;

alter table TOUR add constraint FK_ATWHICHSTATE foreign key (STAGE)
      references STAGE (STAGE) on delete restrict on update restrict;

alter table TOUR add constraint FK_RELATIONSHIP_36 foreign key (CHOOSE_ID, CONFIRM_ID)
      references TOUR_CONFIRM (CHOOSE_ID, CONFIRM_ID) on delete restrict on update restrict;

alter table TOURGUIDESELFTOUR_PIC add constraint FK_ADHAVEPICS foreign key (TOU_UNAME, TOURAD_ID)
      references TOUR_AD (TOU_UNAME, TOURAD_ID) on delete restrict on update restrict;

alter table TOURGUIDE_CHOOSE add constraint FK_RELATIONSHIP_31 foreign key (UNAME)
      references USER (UNAME) on delete restrict on update restrict;

alter table TOURGUIDE_COMMENT add constraint FK_COMMENTONTOUR foreign key (TOUR_ID)
      references TOUR (TOUR_ID) on delete restrict on update restrict;

alter table TOUR_AD add constraint FK_ADVERTISETOUR foreign key (TOU_UNAME)
      references TOUR_GUIDE (UNAME) on delete restrict on update restrict;

alter table TOUR_AD add constraint FK_TOURBEHIND foreign key (UNAME, TOURPLAN_ID)
      references TOUR_PLAN (UNAME, TOURPLAN_ID) on delete restrict on update restrict;

alter table TOUR_APPLY add constraint FK_APPLYTOUSERTOUR foreign key (UNAME)
      references TOUR_GUIDE (UNAME) on delete restrict on update restrict;

alter table TOUR_APPLY add constraint FK_APPLYWHICHTOUR foreign key (USE_UNAME, POST_ID)
      references POST (USE_UNAME, POST_ID) on delete restrict on update restrict;

alter table TOUR_BUY add constraint FK_BUYFROM foreign key (TOU_UNAME, TOURAD_ID)
      references TOUR_AD (TOU_UNAME, TOURAD_ID) on delete restrict on update restrict;

alter table TOUR_BUY add constraint FK_RELATIONSHIP_32 foreign key (CHOOSE_ID)
      references TOURGUIDE_CHOOSE (CHOOSE_ID) on delete restrict on update restrict;

alter table TOUR_CONFIRM add constraint FK_RELATIONSHIP_34 foreign key (CHOOSE_ID)
      references TOURGUIDE_CHOOSE (CHOOSE_ID) on delete restrict on update restrict;

alter table TOUR_GUIDE add constraint FK_ISTOURGUIDE foreign key (UNAME)
      references ACCOUNT (UNAME) on delete restrict on update restrict;

alter table TOUR_PLAN add constraint FK_CREATEHISOWNTOUR foreign key (UNAME)
      references ACCOUNT (UNAME) on delete restrict on update restrict;

alter table TOUR_PLAN_DETAIL add constraint FK_TOURDETAIL foreign key (UNAME, TOURPLAN_ID)
      references TOUR_PLAN (UNAME, TOURPLAN_ID) on delete restrict on update restrict;

alter table TOUR_PLAN_DETAIL add constraint FK_TOURONLOCATION foreign key (LOCATION_ID)
      references LOCATION (LOCATION_ID) on delete restrict on update restrict;

alter table TOUR_START add constraint FK_RELATIONSHIP_33 foreign key (CHOOSE_ID)
      references TOURGUIDE_CHOOSE (CHOOSE_ID) on delete restrict on update restrict;

alter table TOUR_START add constraint FK_RELATIONSHIP_35 foreign key (USE_UNAME, UNAME, POST_ID)
      references TOUR_APPLY (USE_UNAME, UNAME, POST_ID) on delete restrict on update restrict;

alter table USER add constraint FK_ISUSER foreign key (UNAME)
      references ACCOUNT (UNAME) on delete restrict on update restrict;

