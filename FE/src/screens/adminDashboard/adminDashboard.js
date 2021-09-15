import React from 'react'
// import clsx from 'clsx'
// import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Chart from '../../component/admin/dashboard/chart'
import Deposits from '../../component/admin/dashboard/deposits'

export default function Dashboard() {
    return (
        <>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                        style={{
                            height: '240px',
                            overflow: 'hidden',
                        }}
                    >
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper>
                        <Deposits />
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
