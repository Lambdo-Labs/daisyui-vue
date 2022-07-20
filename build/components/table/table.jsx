import { component } from '@/shared/styled';
import { cssUnit } from '@/shared/utils';
import { computed } from 'vue';
import style from './style';
const tableProps = {
    zebra: Boolean,
    compact: Boolean,
    columns: { type: Array, default: () => [] },
    dataSource: { type: Array, default: () => [] },
};
export const Table = component({
    name: 'Table',
    props: tableProps,
    setup: (props) => {
        const cls = computed(() => [
            'dv-table table',
            {
                'table-zebra': props.zebra,
                'table-compact': props.compact,
            },
        ]);
        const cols = computed(() => props.columns.map((col, i) => ({
            ...col,
            key: col.key || col.dataIndex || i,
        })));
        const head = computed(() => cols.value.map((col, i) => (<th style={col.fixed
                ? {
                    position: 'sticky',
                    [col.fixed === 'left' ? 'left' : 'right']: 0,
                }
                : {
                    position: 'relative',
                }} key={col.key}>
            {typeof col.title === 'function' ? col.title() : col.title}
          </th>)));
        return () => {
            return (<div class="dv-table-wrap">
            <table class={cls.value}>
              <colgroup>
                {cols.value.map((col) => (<col key={col.key} style={{
                        width: cssUnit(col.width),
                    }}/>))}
              </colgroup>
              <thead>
                <tr>{head.value}</tr>
              </thead>
              <tbody>
                {props.dataSource.map((record, i) => (<tr key={i} class="hover">
                    {props.columns.map((col) => (<td key={col.dataIndex || col.key} style={col.fixed
                            ? {
                                position: 'sticky',
                                [col.fixed === 'left' ? 'left' : 'right']: 0,
                            }
                            : {
                                position: 'relative',
                            }}>
                        {typeof col.render === 'function'
                            ? col.render(record[col.dataIndex], record, i)
                            : record[col.dataIndex]}
                      </td>))}
                  </tr>))}
              </tbody>
            </table>
          </div>);
        };
    },
}, style);
