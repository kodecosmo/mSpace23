import SingleSideNavLink from '@/components/atoms/navbar/SideNavLink/Single'
import DividerHeading from '@/components/atoms/navbar/SideNavLink/DividerHeading'
import MultipleSideNavLink from '@/components/atoms/navbar/SideNavLink/Multiple'
import MultipleSubLink from '@/components/atoms/navbar/SideNavLink/MultipleSubLink'

export default function SideNavbarMolecule({ windowHeight = 0 }) {
    return (
        <>
            <aside id="default-sidebar" className="sticky top-[70px] left-0 z-40 w-full max-w-[18rem] h-fit transition-transform -translate-x-full sm:translate-x-0 overflow-y-auto overflow-x-hidden border-r border-solid border-gray-200 bg-white dark:bg-gray-80" aria-label="Sidenav" style={{ height: (windowHeight - 70) + "px" }}>
                <div className="overflow-y-auto py-5 px-3 bg-white dark:bg-gray-800 ">
                    <ul className="space-y-2">

                        <DividerHeading text="Menu" />

                        <SingleSideNavLink text="Dashboard" href="/dashboard" svgPath={<><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></>} />

                        <MultipleSideNavLink
                            id="questions-sidenav-dropdown"
                            text="Questions"
                            svgPath={<><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></>}
                            subLinks={
                                <>
                                    <MultipleSubLink text="Post Question" href="/dashboard/post-question" />
                                    <MultipleSubLink text="My Questions" href="/dashboard/questions" />
                                </>
                            }
                        />

                        <SingleSideNavLink text="My Answers" href="/dashboard/answers" svgPath={<><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></>} />

                        <SingleSideNavLink text="Tutoring Sessions" href="/dashboard/tutoring-sessions" svgPath={<><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></>} />

                        <MultipleSideNavLink
                            id="wallet-sidenav-dropdown"
                            text="Wallet"
                            svgPath={<><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></>}
                            subLinks={
                                <>
                                    <MultipleSubLink text="Transactions" href="/dashboard/wallet/transactions" />
                                    <MultipleSubLink text="Package" href="/dashboard/wallet/package" />
                                </>
                            }
                        />

                    </ul>
                    <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">

                        <DividerHeading text="Personal navigator" />

                        <SingleSideNavLink text="Profile" href="/profile" svgPath={<><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></>} />

                        <SingleSideNavLink text="Calendar" href="/dashboard/calendar" svgPath={<><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></>} />

                        <SingleSideNavLink text="Notifications" href="/dashboard/notifications" count="6" svgPath={<><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" /></>} />

                        <SingleSideNavLink text="Help" href="/help" svgPath={<><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" /></>} />

                    </ul>
                </div>
                
            </aside>

        </>
    )
}