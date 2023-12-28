import type { Meta, StoryObj } from "@storybook/vue3";
import { PaperCard } from "@/components/star/atom/Card";
import { camelCase } from "change-case/keys";
import cardButtonDesign from "./assets/card-buttons.png";

const meta: Meta<typeof PaperCard> = {
  title: "Components/PaperCard",
  tags: ["autodocs"],
  component: PaperCard,
  parameters: {
    docs: {
      description: {
        component: `There is only 3 types of buttons for teacher,
        and 5 for student.  
        ![](${cardButtonDesign})
        What left to design:  
        - Show published date OR modified date for what?  
        - start/end time combination (either-one or both undefined)  
        - submission count  
        - trial count
        - subject name
        - what if no actions available?
          
        - 閱卷/服告 (review/report)
      `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PaperCard>;

// const render: Story["render"] = (args, { argTypes }) => ({
//   components: { SelectItem },
//   setup() {
//     return { args };
//   },
//   template: '<SelectItem v-bind="args">{{ args.default }}</SelectItem>',
// });
export const TeacherSelfPaper: Story = {
  args: {
    role: "teacher",
    paper: camelCase(
      {
        id: 4189,
        object_error_list: [],
        project: "star",
        user_id: 200000150,
        school_code: "",
        acayear: "",
        package_id: 13,
        source: 0,
        title: "Copy of student preset paper",
        content: "",
        description: "",
        close_url: "",
        leaderboard_code: "",
        leaderboard_mode: "",
        report_mode: "last",
        start_time: "2023-10-05 00:00:00",
        end_time: "2099-12-31 00:00:00",
        publish_date: "",
        published: 0,
        bc_ver: "bc_2000",
        attempted: 0,
        ended: 0,
        time_allowed: 0,
        time_bonus: 0,
        max_trial_no: 0,
        max_trial_score: 0,
        auto_save_interval: 60,
        submit_once: 1,
        cannot_go_prev: 0,
        force_answer: 0,
        show_feedback: 0,
        view_after_submit: 1,
        preserve_last_submit_ans: 1,
        suppress_media: 0,
        trials_assigned: 0,
        trials_submitted: 0,
        trials_marked: 0,
        trials_total: 0,
        sections: [
          {
            id: 4001,
            create_at: "2023-10-13 11:29:17",
            create_by: "hke-felixwong-tr",
            modify_at: "2023-10-13 11:29:17",
            modify_by: "hke-felixwong-tr",
            object_error_list: [],
            paper_id: 4189,
            seq: 1,
            title: "",
            content: "",
            no_of_questions: 1,
            suggested_time: 1200,
            mode: "sequential",
            criteria: "",
            setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
            section_questions: [],
          },
        ],
        trials: [],
        owner_modify_at: "2023-10-13 11:29:17",
        owner_info: {
          city_id: "hke-felixwong-tr",
          school_code: "hke",
          grade_level: null,
          school_class: null,
          class: null,
          class_no: null,
          fullname_c: "Wong Yuk Wing, Felix",
          fullname_e: "Wong Yuk Wing, Felix",
          nickname: "Wong Yuk Wing, Felix",
          email_address: "",
          status: 1,
          sch_level_id: 0,
          user_id: 200000150,
          roles: ["100000005"],
        },
        feedback_status: "none",
        bca_code: "",
        acl: [
          {
            id: 9483,
            create_at: "2023-10-13 11:29:17",
            create_by: "hke-felixwong-tr",
            modify_at: "2023-10-13 11:29:17",
            modify_by: "hke-felixwong-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 4189,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "group",
            rule_value_1: "65017d6e2c6875_26275603",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 9481,
            create_at: "2023-10-13 11:29:17",
            create_by: "hke-felixwong-tr",
            modify_at: "2023-10-13 11:29:17",
            modify_by: "hke-felixwong-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 4189,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "school_level_class",
            rule_value_1: "hke-11-A",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
        ],
        status: {
          is_frozen: false,
          can_start: false,
          can_preview: true,
          can_view: true,
          can_modify: true,
          can_delete: true,
          can_assign: true,
          can_review: false,
          can_report: false,
          report_shared_num: 0,
          report_shared_accepted: false,
          can_publish: false,
          can_recall: false,
          can_share_paper: true,
          can_share_report: false,
          can_accept: false,
          can_reject: false,
          compiled_by: "myself",
          submission: "not_attempted",
        },
        tab: "",
      },
      Number.MAX_SAFE_INTEGER
    ),
  },
};
export const TeacherPresetPaper: Story = {
  args: {
    role: "teacher",
    paper: camelCase(
      {
        id: 1819,
        object_error_list: [],
        project: "star",
        user_id: 200000045,
        school_code: "prj",
        acayear: "",
        package_id: 13,
        source: 0,
        title: "#05 teacher preset paper",
        content: "",
        description: "",
        close_url: "",
        leaderboard_code: "",
        leaderboard_mode: "",
        report_mode: "last",
        start_time: "",
        end_time: "",
        publish_date: "",
        published: 1,
        bc_ver: "",
        attempted: 0,
        ended: 0,
        time_allowed: 0,
        time_bonus: 0,
        max_trial_no: 1,
        max_trial_score: 0,
        auto_save_interval: 60,
        submit_once: 1,
        cannot_go_prev: 0,
        force_answer: 0,
        show_feedback: 0,
        view_after_submit: 0,
        preserve_last_submit_ans: 1,
        suppress_media: 0,
        trials_assigned: 0,
        trials_submitted: 0,
        trials_marked: 0,
        trials_total: 0,
        sections: [
          {
            id: 1475,
            create_at: "2017-02-20 17:06:23",
            create_by: "hke-system",
            modify_at: "2017-02-20 17:06:23",
            modify_by: "hke-system",
            object_error_list: [],
            paper_id: 1819,
            seq: 1,
            title: "",
            content: "",
            no_of_questions: 4,
            suggested_time: 3240,
            mode: "sequential",
            criteria: "",
            setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
            section_questions: [],
          },
        ],
        trials: [],
        owner_modify_at: "2017-02-20 17:06:23",
        owner_info: {
          city_id: "prj-star_tr1",
          school_code: "prj",
          grade_level: null,
          school_class: null,
          class: null,
          class_no: null,
          fullname_c: "預設評估",
          fullname_e: "Preset Papers",
          nickname: null,
          email_address: "",
          status: 1,
          sch_level_id: 0,
          user_id: 200000045,
          roles: ["100000005"],
        },
        school: {
          name_e: "PROJECT TESTING, HKEDCITY",
          name_c: "教城專案測試學校",
          sch_type: "SEC",
          school_code: "prj",
        },
        feedback_status: "none",
        bca_code: "",
        acl: [],
        status: {
          is_frozen: true,
          can_start: false,
          can_preview: true,
          can_view: true,
          can_modify: false,
          can_delete: false,
          can_assign: false,
          can_review: false,
          can_report: false,
          report_shared_num: 0,
          report_shared_accepted: false,
          can_publish: false,
          can_recall: false,
          can_share_paper: false,
          can_share_report: false,
          can_accept: true,
          can_reject: true,
          compiled_by: "others",
          submission: "ready",
        },
        tab: "teacher_preset",
        type: "teacher_preset",
      },
      Number.MAX_SAFE_INTEGER
    ),
  },
};

/** feedbackStatus=pending */
export const TeacherSharedPaperWithManualMarking: Story = {
  args: {
    role: "teacher",
    paper: camelCase(
      {
        id: 3470,
        object_error_list: [],
        project: "star",
        user_id: 100001371,
        school_code: "hke",
        acayear: "2021/22",
        package_id: 13,
        source: 0,
        title: "Super Task HKECL_TEST_AC1",
        content: "",
        description: "",
        close_url: "",
        leaderboard_code: "",
        leaderboard_mode: "",
        report_mode: "last",
        start_time: "2021-10-08 10:44:00",
        end_time: "2022-08-28 18:15:00",
        publish_date: "2021-10-08 10:44:23",
        published: 1,
        bc_ver: "bc_2000",
        attempted: 1,
        ended: 1,
        time_allowed: 0,
        time_bonus: 0,
        max_trial_no: 0,
        max_trial_score: 0,
        auto_save_interval: 60,
        submit_once: 1,
        cannot_go_prev: 0,
        force_answer: 0,
        show_feedback: 0,
        view_after_submit: 1,
        preserve_last_submit_ans: 1,
        suppress_media: 0,
        trials_assigned: 0,
        trials_submitted: 0,
        trials_marked: 0,
        trials_total: 0,
        sections: [
          {
            id: 3120,
            create_at: "2021-10-08 10:40:17",
            create_by: "hke-adrian-tr",
            modify_at: "2021-10-08 10:52:14",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            paper_id: 3470,
            seq: 1,
            title: "",
            content: "",
            no_of_questions: 1,
            suggested_time: 3600,
            mode: "sequential",
            criteria: "",
            setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
            section_questions: [],
          },
        ],
        trials: [],
        owner_modify_at: "2021-10-08 10:52:13",
        owner_info: {
          city_id: "hke-adrian-tr",
          school_code: "hke",
          grade_level: null,
          school_class: null,
          class: null,
          class_no: null,
          fullname_c: "水埗鰂魚7",
          fullname_e: "English Man6",
          nickname: "水埗鰂魚涌ha",
          email_address: "",
          status: 1,
          sch_level_id: 0,
          user_id: 100001371,
          roles: ["100000005"],
        },
        school: {
          name_e: "HONG KONG EDUCATION CITY SCHOOL",
          name_c: "香港教育城學校",
          sch_type: "SEC",
          school_code: "hke",
        },
        feedback_status: "pending",
        bca_code: "",
        acl: [
          {
            id: 6870,
            create_at: "2021-10-08 10:44:24",
            create_by: "hke-adrian-tr",
            modify_at: "2021-10-08 10:52:14",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 3470,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "group",
            rule_value_1: "5872e9f22fec71_79561593",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
        ],
        status: {
          is_frozen: true,
          can_start: false,
          can_preview: true,
          can_view: true,
          can_modify: false,
          can_delete: false,
          can_assign: false,
          can_review: false,
          can_report: false,
          report_shared_num: 0,
          report_shared_accepted: false,
          can_publish: false,
          can_recall: false,
          can_share_paper: true,
          can_share_report: false,
          can_accept: true,
          can_reject: true,
          compiled_by: "others",
          submission: "finished",
        },
        tab: "shared",
      },
      Number.MAX_SAFE_INTEGER
    ),
  },
};
/** feedbackStatus=required */
export const TeacherSharedPaperWithMarked: Story = {
  args: {
    role: "teacher",
    paper: camelCase(
      {
        id: 3843,
        object_error_list: [],
        project: "star",
        user_id: 0,
        school_code: "",
        acayear: "",
        package_id: 13,
        source: 100001371,
        title: "Super Task HKECL_TEST_AC1",
        content: "",
        description: "",
        close_url: "",
        leaderboard_code: "",
        leaderboard_mode: "",
        report_mode: "last",
        start_time: "",
        end_time: "",
        publish_date: "",
        published: 1,
        bc_ver: "bc_2000",
        attempted: 0,
        ended: 0,
        time_allowed: 0,
        time_bonus: 0,
        max_trial_no: 0,
        max_trial_score: 0,
        auto_save_interval: 60,
        submit_once: 1,
        cannot_go_prev: 0,
        force_answer: 0,
        show_feedback: 0,
        view_after_submit: 1,
        preserve_last_submit_ans: 1,
        suppress_media: 0,
        trials_assigned: 0,
        trials_submitted: 0,
        trials_marked: 0,
        trials_total: 0,
        sections: [
          {
            id: 3655,
            create_at: "2022-08-08 15:01:40",
            create_by: "hke-adrian-tr",
            modify_at: "2022-08-08 15:01:40",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            paper_id: 3843,
            seq: 1,
            title: "",
            content: "",
            no_of_questions: 1,
            suggested_time: 3600,
            mode: "sequential",
            criteria: "",
            setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
            section_questions: [],
          },
        ],
        trials: [],
        owner_modify_at: "2021-10-08 10:52:13",
        owner_info: {
          city_id: "hke-adrian-tr",
          school_code: "hke",
          grade_level: null,
          school_class: null,
          class: null,
          class_no: null,
          fullname_c: "水埗鰂魚7",
          fullname_e: "English Man6",
          nickname: "水埗鰂魚涌ha",
          email_address: "",
          status: 1,
          sch_level_id: 0,
          user_id: 100001371,
          roles: ["100000005"],
        },
        feedback_status: "required",
        bca_code: "",
        acl: [],
        status: {
          is_frozen: false,
          can_start: false,
          can_preview: true,
          can_view: true,
          can_modify: false,
          can_delete: false,
          can_assign: false,
          can_review: false,
          can_report: false,
          report_shared_num: 0,
          report_shared_accepted: false,
          can_publish: false,
          can_recall: false,
          can_share_paper: true,
          can_share_report: false,
          can_accept: true,
          can_reject: true,
          compiled_by: "others",
          submission: "not_attempted",
        },
        tab: "shared",
      },
      Number.MAX_SAFE_INTEGER
    ),
  },
};
/** Not found yet */
export const TeacherStarNetworkSchoolProgramme: Story = {
  args: {
    role: "teacher",
    paper: camelCase({}, Number.MAX_SAFE_INTEGER),
  },
};
export const TeacherAssessmentMaterials2021: Story = {
  args: {
    role: "teacher",
    paper: camelCase(
      {
        id: 2969,
        object_error_list: [],
        project: "star",
        user_id: 200000057,
        school_code: "hke",
        acayear: "2020/21",
        package_id: 13,
        source: 200000057,
        title: "6CR1 BCA2021 to ASE",
        content: "",
        description: "",
        close_url: "",
        leaderboard_code: "6CRS",
        leaderboard_mode: "",
        report_mode: "last",
        start_time: "2021-04-29 00:00:00",
        end_time: "2021-08-27 17:00:00",
        publish_date: "2021-04-28 10:50:09",
        published: 1,
        bc_ver: "bc_2000",
        attempted: 1,
        ended: 1,
        time_allowed: 0,
        time_bonus: 0,
        max_trial_no: 1,
        max_trial_score: 0,
        auto_save_interval: 60,
        submit_once: 1,
        cannot_go_prev: 0,
        force_answer: 0,
        show_feedback: 0,
        view_after_submit: 0,
        preserve_last_submit_ans: 1,
        suppress_media: 0,
        trials_assigned: 0,
        trials_submitted: 0,
        trials_marked: 0,
        trials_total: 0,
        sections: [
          {
            id: 2623,
            create_at: "2020-12-10 11:05:08",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            paper_id: 2969,
            seq: 1,
            title: "",
            content: "",
            no_of_questions: 3,
            suggested_time: 1800,
            mode: "sequential",
            criteria: "",
            setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
            section_questions: [],
          },
        ],
        trials: [],
        owner_modify_at: "2021-04-28 10:50:09",
        owner_info: {
          city_id: "prj-star_tr6",
          school_code: "prj",
          grade_level: null,
          school_class: null,
          class: null,
          class_no: null,
          fullname_c: "評估材料",
          fullname_e: "Assessment resources",
          nickname: "評估材料 Assessment resources (GU21)",
          email_address: "",
          status: 1,
          sch_level_id: 0,
          user_id: 200000057,
          roles: ["100000005"],
        },
        school: {
          name_e: "HONG KONG EDUCATION CITY SCHOOL",
          name_c: "香港教育城學校",
          sch_type: "SEC",
          school_code: "hke",
        },
        feedback_status: "none",
        bca_code: "bca2021",
        is_bca: 1,
        is_bca_mock: 0,
        is_brief_report: true,
        acl: [
          {
            id: 6179,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "100001373",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6173,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "100001411",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6175,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "100001762",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6171,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "200000016",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6169,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "200000022",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6177,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "45278405",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
        ],
        status: {
          is_frozen: true,
          can_start: false,
          can_preview: true,
          can_view: true,
          can_modify: false,
          can_delete: false,
          can_assign: false,
          can_review: false,
          can_report: true,
          report_shared_num: 0,
          report_shared_accepted: true,
          can_publish: false,
          can_recall: false,
          can_share_paper: true,
          can_share_report: true,
          can_accept: false,
          can_reject: false,
          compiled_by: "others",
          submission: "finished",
        },
        tab: "bca2021",
      },
      Number.MAX_SAFE_INTEGER
    ),
  },
};
export const StudentReviewReport: Story = {
  args: {
    role: "student",
    paper: {
      id: 4007,
      objectErrorList: [],
      project: "star",
      userId: 200000150,
      schoolCode: "hke",
      acayear: "2022/23",
      packageId: 15,
      source: 0,
      title: "2022-10-06",
      content: "",
      description: "",
      closeUrl: "",
      leaderboardCode: "",
      leaderboardMode: "",
      reportMode: "last",
      startTime: "2022-10-06 14:44:00",
      endTime: "2022-10-23 00:00:00",
      publishDate: "2022-10-06 14:44:24",
      published: 1,
      bcVer: "bc_2017",
      attempted: 1,
      ended: 1,
      timeAllowed: 0,
      timeBonus: 0,
      maxTrialNo: 1,
      maxTrialScore: 0,
      autoSaveInterval: 60,
      submitOnce: 1,
      cannotGoPrev: 0,
      forceAnswer: 0,
      showFeedback: 0,
      viewAfterSubmit: 0,
      preserveLastSubmitAns: 1,
      suppressMedia: 0,
      trialsAssigned: 0,
      trialsSubmitted: 0,
      trialsMarked: 0,
      trialsTotal: 0,
      sections: [
        {
          id: 3819,
          createAt: "2022-10-06 14:44:24",
          createBy: "hke-felixwong-tr",
          modifyAt: "2022-10-06 14:44:24",
          modifyBy: "hke-felixwong-tr",
          objectErrorList: [],
          paperId: 4007,
          seq: 1,
          title: "",
          content: "",
          noOfQuestions: 2,
          suggestedTime: 360,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          sectionQuestions: [],
        },
      ],
      trials: [
        {
          paperId: 4007,
          userId: 200000151,
          schoolCode: "",
          submitted: 1,
          marked: 1,
          timeElapsed: 11,
          submitTime: "2022-10-06 15:09:15",
          forceSubmit: 0,
          score: 2,
          scoreBasic: 0,
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjUwNDAxMjEsImV4cCI6MTY2NTA1MDkyMSwidXNlciI6eyJjaXR5X2lkIjoiaGtlLWZlbGl4d29uZy1zdCIsImdyYWRlX2xldmVsIjoiUzEiLCJzY2hvb2xfY2xhc3MiOiJTMUEiLCJjbGFzc19ubyI6bnVsbCwibmlja25hbWUiOiJXb25nIFl1ayBXaW5nLCBGZWxpeCIsImVtYWlsX2FkZHJlc3MiOiIiLCJzdGF0dXMiOjEsInNjaF9sZXZlbF9pZCI6MTAsInVzZXJfaWQiOjIwMDAwMDE1MSwicm9sZXMiOiIxMDAwMDAwMDYiLCJncm91cHMiOiI1ODZiMjY1NGMyODdkOF84MjMxNDg1NCw1ODZiMjY1NjExYTIzNF82MTI1MTY0Niw1ODZiMjY1Njk0ZmM0Nl8wNTUyNTU4NCw1ODcyZTlmMjJmZWM3MV83OTU2MTU5Myw1OTI2NWVkZDE5MzllNF80NzIwODk5MCw1ZDI1ODZjYWM5ZWZkNF84ODAwMjUzNCw1ZDI1OGM5ZGVlOTI3MV85NjAzNTU5Miw1ZDI1YWQ4MmVmNGIyM182ODMzOTA4MCw1YzkwYjhkYTRmODk2Ml85OTU3Njk0NCIsImNmdWxsbmFtZSI6IldvbmcgWXVrIFdpbmcsIEZlbGl4IiwiZWZ1bGxuYW1lIjoiV29uZyBZdWsgV2luZywgRmVsaXgiLCJzY2hvb2xjb2RlIjoiaGtlIiwic2NoX2NsYXNzIjoiQSJ9fQ.Cw_kyxpblycMsqr3iPLBsW6AXmjsUbRj1gUm7TPBihs",
          resourceLinkPk: 0,
          ltiUserId: "",
          state: "",
          id: 5341,
        },
      ],
      ownerModifyAt: "2022-10-06 14:44:24",
      ownerInfo: {
        cityId: "hke-felixwong-tr",
        schoolCode: "hke",
        gradeLevel: null,
        schoolClass: null,
        class: null,
        classNo: null,
        fullnameC: "Wong Yuk Wing, Felix",
        fullnameE: "Wong Yuk Wing, Felix",
        nickname: "Wong Yuk Wing, Felix",
        emailAddress: "",
        status: 1,
        schLevelId: 0,
        userId: 200000150,
        roles: ["100000005"],
      },
      school: {
        nameE: "HONG KONG EDUCATION CITY SCHOOL",
        nameC: "香港教育城學校",
        schType: "SEC",
        schoolCode: "hke",
      },
      bcaCode: "",
      mySubmmitedTrialNo: 1,
      status: {
        submission: "submitted",
        isFrozen: true,
        canStart: false,
        canView: false,
        canModify: false,
        canDelete: false,
        canAssign: false,
        canReview: true,
        canReport: true,
        reportSharedNum: 0,
        reportSharedAccepted: false,
      },
      tab: "",
    },
  },
};
export const StudentNoActionAvailable: Story = {
  args: {
    role: "student",
    paper: {
      id: 4191,
      objectErrorList: [],
      project: "star",
      userId: 200000150,
      schoolCode: "hke",
      acayear: "2023/24",
      packageId: 15,
      source: 0,
      title: "2023-10-18",
      content: "",
      description: "",
      closeUrl: "",
      leaderboardCode: "",
      leaderboardMode: "",
      reportMode: "last",
      startTime: "2023-10-18 10:09:00",
      endTime: "2023-10-28 00:00:00",
      publishDate: "2023-10-18 10:09:36",
      published: 1,
      bcVer: "bc_2017",
      attempted: 0,
      ended: 1,
      timeAllowed: 0,
      timeBonus: 0,
      maxTrialNo: 0,
      maxTrialScore: 0,
      autoSaveInterval: 60,
      submitOnce: 1,
      cannotGoPrev: 0,
      forceAnswer: 0,
      showFeedback: 0,
      viewAfterSubmit: 1,
      preserveLastSubmitAns: 1,
      suppressMedia: 0,
      trialsAssigned: 0,
      trialsSubmitted: 0,
      trialsMarked: 0,
      trialsTotal: 0,
      sections: [
        {
          id: 4003,
          createAt: "2023-10-18 10:09:36",
          createBy: "hke-felixwong-tr",
          modifyAt: "2023-10-18 10:09:36",
          modifyBy: "hke-felixwong-tr",
          objectErrorList: [],
          paperId: 4191,
          seq: 1,
          title: "",
          content: "",
          noOfQuestions: 2,
          suggestedTime: 120,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          sectionQuestions: [],
        },
      ],
      trials: [],
      ownerModifyAt: "2023-10-18 10:09:36",
      ownerInfo: {
        cityId: "hke-felixwong-tr",
        schoolCode: "hke",
        gradeLevel: null,
        schoolClass: null,
        class: null,
        classNo: null,
        fullnameC: "Wong Yuk Wing, Felix",
        fullnameE: "Wong Yuk Wing, Felix",
        nickname: "Wong Yuk Wing, Felix",
        emailAddress: "",
        status: 1,
        schLevelId: 0,
        userId: 200000150,
        roles: ["100000005"],
      },
      school: {
        nameE: "HONG KONG EDUCATION CITY SCHOOL",
        nameC: "香港教育城學校",
        schType: "SEC",
        schoolCode: "hke",
      },
      bcaCode: "",
      mySubmmitedTrialNo: 0,
      status: {
        submission: "not_submitted",
        isFrozen: false,
        canStart: false,
        canView: false,
        canModify: false,
        canDelete: false,
        canAssign: false,
        canReview: false,
        canReport: false,
        reportSharedNum: 0,
        reportSharedAccepted: false,
      },
      tab: "",
    },
  },
};

/** Start time is an empty string */
export const StudentNoStartTime: Story = {
  args: {
    role: "student",
    paper: {
      id: 329,
      objectErrorList: [],
      project: "star",
      userId: 100001371,
      schoolCode: "hke",
      acayear: "2015/16",
      packageId: 13,
      source: 0,
      title: "2016-08-15 chi 1",
      content: "",
      description: "",
      closeUrl: "",
      leaderboardCode: "",
      leaderboardMode: "",
      reportMode: "last",
      startTime: "",
      endTime: "2016-08-30 00:00:00",
      publishDate: "2016-08-18 15:33:01",
      published: 1,
      bcVer: "",
      attempted: 0,
      ended: 1,
      timeAllowed: 0,
      timeBonus: 0,
      maxTrialNo: 1,
      maxTrialScore: 0,
      autoSaveInterval: 60,
      submitOnce: 1,
      cannotGoPrev: 0,
      forceAnswer: 0,
      showFeedback: 0,
      viewAfterSubmit: 0,
      preserveLastSubmitAns: 1,
      suppressMedia: 0,
      trialsAssigned: 0,
      trialsSubmitted: 0,
      trialsMarked: 0,
      trialsTotal: 0,
      sections: [
        {
          id: 237,
          createAt: "2016-08-15 16:00:29",
          createBy: "hke-adrian-tr",
          modifyAt: "2016-08-18 15:33:01",
          modifyBy: "hke-adrian-tr",
          objectErrorList: [],
          paperId: 329,
          seq: 1,
          title: "",
          content: "",
          noOfQuestions: 3,
          suggestedTime: 2700,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          sectionQuestions: [],
        },
      ],
      trials: [],
      ownerModifyAt: "2016-12-12 09:19:24",
      ownerInfo: {
        cityId: "hke-adrian-tr",
        schoolCode: "hke",
        gradeLevel: null,
        schoolClass: null,
        class: null,
        classNo: null,
        fullnameC: "水埗鰂魚7",
        fullnameE: "English Man6",
        nickname: "水埗鰂魚涌ha",
        emailAddress: "",
        status: 1,
        schLevelId: 0,
        userId: 100001371,
        roles: ["100000005"],
      },
      school: {
        nameE: "HONG KONG EDUCATION CITY SCHOOL",
        nameC: "香港教育城學校",
        schType: "SEC",
        schoolCode: "hke",
      },
      bcaCode: "",
      mySubmmitedTrialNo: 0,
      status: {
        submission: "not_submitted",
        isFrozen: true,
        canStart: false,
        canView: false,
        canModify: false,
        canDelete: false,
        canAssign: false,
        canReview: false,
        canReport: false,
        reportSharedNum: 0,
        reportSharedAccepted: false,
      },
      tab: "",
    },
  },
};
// export const WithCommand: Story = {
//   // render,
//   args: {
//     model: {
//       ownerName: "John Doe",
//       icon: "material-symbols:crossword",
//       title: "lorem ipsum",
//       description: "lorem ipsum",
//       command: () => console.log("yyy"),
//     },
//   },
// };
export const Mobile: Story = {
  args: {
    role: "teacher",
    paper: camelCase(
      {
        id: 2969,
        object_error_list: [],
        project: "star",
        user_id: 200000057,
        school_code: "hke",
        acayear: "2020/21",
        package_id: 13,
        source: 200000057,
        title: "6CR1 BCA2021 to ASE",
        content: "",
        description: "",
        close_url: "",
        leaderboard_code: "6CRS",
        leaderboard_mode: "",
        report_mode: "last",
        start_time: "2021-04-29 00:00:00",
        end_time: "2021-08-27 17:00:00",
        publish_date: "2021-04-28 10:50:09",
        published: 1,
        bc_ver: "bc_2000",
        attempted: 1,
        ended: 1,
        time_allowed: 0,
        time_bonus: 0,
        max_trial_no: 1,
        max_trial_score: 0,
        auto_save_interval: 60,
        submit_once: 1,
        cannot_go_prev: 0,
        force_answer: 0,
        show_feedback: 0,
        view_after_submit: 0,
        preserve_last_submit_ans: 1,
        suppress_media: 0,
        trials_assigned: 0,
        trials_submitted: 0,
        trials_marked: 0,
        trials_total: 0,
        sections: [
          {
            id: 2623,
            create_at: "2020-12-10 11:05:08",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            paper_id: 2969,
            seq: 1,
            title: "",
            content: "",
            no_of_questions: 3,
            suggested_time: 1800,
            mode: "sequential",
            criteria: "",
            setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
            section_questions: [],
          },
        ],
        trials: [],
        owner_modify_at: "2021-04-28 10:50:09",
        owner_info: {
          city_id: "prj-star_tr6",
          school_code: "prj",
          grade_level: null,
          school_class: null,
          class: null,
          class_no: null,
          fullname_c: "評估材料",
          fullname_e: "Assessment resources",
          nickname: "評估材料 Assessment resources (GU21)",
          email_address: "",
          status: 1,
          sch_level_id: 0,
          user_id: 200000057,
          roles: ["100000005"],
        },
        school: {
          name_e: "HONG KONG EDUCATION CITY SCHOOL",
          name_c: "香港教育城學校",
          sch_type: "SEC",
          school_code: "hke",
        },
        feedback_status: "none",
        bca_code: "bca2021",
        is_bca: 1,
        is_bca_mock: 0,
        is_brief_report: true,
        acl: [
          {
            id: 6179,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "100001373",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6173,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "100001411",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6175,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "100001762",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6171,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "200000016",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6169,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "200000022",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
          {
            id: 6177,
            create_at: "2021-04-28 10:50:10",
            create_by: "hke-adrian-tr",
            modify_at: "2021-04-28 10:50:10",
            modify_by: "hke-adrian-tr",
            object_error_list: [],
            project: "star",
            entity_type: "paper",
            entity_id: 2969,
            function_type: "attempt",
            rule_set: "user",
            rule_type: "user_id",
            rule_value_1: "45278405",
            rule_value_2: "",
            rule_value_3: "",
            rule_value_4: "",
            status: "enabled",
            remarks: "",
          },
        ],
        status: {
          is_frozen: true,
          can_start: false,
          can_preview: true,
          can_view: true,
          can_modify: false,
          can_delete: false,
          can_assign: false,
          can_review: false,
          can_report: true,
          report_shared_num: 0,
          report_shared_accepted: true,
          can_publish: false,
          can_recall: false,
          can_share_paper: true,
          can_share_report: true,
          can_accept: false,
          can_reject: false,
          compiled_by: "others",
          submission: "finished",
        },
        tab: "bca2021",
      },
      Number.MAX_SAFE_INTEGER
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: "iphone14",
    },
  },
};
